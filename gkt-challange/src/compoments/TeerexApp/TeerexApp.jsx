import React, { useEffect, useState } from "react";
import ProductPage from '../ProductPage/ProductPage';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from '../Cart/Cart';
import axios from "axios";
import { useSnackbar } from "notistack";

const TeerexApp = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [product, setProduct] = useState([]);
    const [userSearch,setUserSearch]=useState("");
    const [cartData, setCartData] = useState(
      JSON.parse(localStorage.getItem("cartData"))
    );
    const [filterItems, setFilterItems] = useState({
      color: [],
      type: [],
      gender: [],
      price: [],
    });
    const [filteredProductItem, setFilteredProductItem] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);

    
  useEffect(() => {
    const fetchProduct=async()=>{
    performAPICall();}
    fetchProduct();
  }, []);
  
  useEffect(() => {
    const onSetCartData=()=>{
    localStorage.setItem("cartData", JSON.stringify(cartData));
    GetTotalProductItem();}
    onSetCartData();
  }, [cartData]);

  useEffect(()=>{
    const onFilterData=()=>{
      filterProduct();
    }
    onFilterData();
  },[filterItems])

  const performAPICall = async () => {
    
    try {
      let res = await axios.get(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      );

      setProduct(res.data);
      setFilteredProductItem(res.data);
    } catch (error) {
      if (error.response) {
        enqueueSnackbar(`${error.response.data.message}`, { variant: "error" });
      } else enqueueSnackbar("Something went wrong.", { variant: "error" });
    } 
  };

  const DeleteItemInCart=(productId)=>{
    let afterDeletedCartITem={};
    for (let key in cartData){

        if(key!==productId){
            afterDeletedCartITem={
                ...afterDeletedCartITem,
                [key]:cartData[key]
            }
    }
  }
  setCartData({
    ...afterDeletedCartITem
  })
}
  const handleAddToCart = (event) => {
    const productId = event.currentTarget.id;
    const cartAction=event.currentTarget.value;
    let count;
    if (cartData && cartData[productId]) {
      count = cartData[productId];
    } else {
      count = 0;
    }
    console.log(count);

    if (cartAction==="add"){
        count+=1;
    }else if (cartAction==="subtract"){
        count-=1;
    }
    else{
        DeleteItemInCart(productId);
        return

    }
    if (count<=0){
        DeleteItemInCart(productId)
        return
        
    }
    if (count>product.find((each)=>each.id===parseInt(productId)).quantity){
        console.log('error')
        enqueueSnackbar("out of Quantity", { variant: "error" });
        return;
    }
    setCartData({
      ...cartData,
      [productId]: count,
    });
  };

  const GetTotalProductItem = () => {
    let count = 0;
    for (const property in cartData) {
      count = cartData[property] + count;
    }
    setTotalProducts(count);
  };
  const filterSelectedProduct=(productToFilter,type)=>{
    let data=productToFilter.filter((each)=>{
     
        
      return filterItems[type].some((filter)=>{
        
        if (type==="price"){
          let low,high ;
          [low,high]=filter.split("-");
          
          if (high ){
            return (each[type]>=parseInt(low)  && each[type] <= parseInt(high));
          }else{
            return each[type]>=parseInt(low);
          }
        }
          
        return filter===each[type]});
    })
    return data;

  };
  const filterProduct = () => {
    let productToFilter=product;  
    if (filterItems['color'].length!==0){
      productToFilter=filterSelectedProduct(productToFilter,"color");

    }
    if (filterItems['gender'].length!==0){
      productToFilter=filterSelectedProduct(productToFilter,"gender");

    }
      
    if (filterItems['type'].length!==0){
      productToFilter=filterSelectedProduct(productToFilter,"type");
    }
    if (filterItems['price'].length!==0){
      productToFilter=filterSelectedProduct(productToFilter,"price");
    }

    
   
    setFilteredProductItem(productToFilter);
    
    
    


    


  };

  const handleUserSearch=(event)=>{
    setUserSearch(event.target.value);

  }
  const handleUserSearchButton=(event)=>{
   let productToSearch=product;
   if (userSearch!==""){
    let userInput=userSearch.toLowerCase();
   productToSearch=productToSearch.filter((each)=>{
    console.log(each.name.toLowerCase()===userInput)
    return each.name.toLowerCase()===userInput;
   })
   console.log(productToSearch);
   
   setFilteredProductItem(productToSearch);
   setUserSearch("")

   }
   




  }
 


  const handleFilterData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(event.target.checked);
   
    if (event.target.checked) {
      


      setFilterItems({
        ...filterItems,
        [name]: [...filterItems[name], value],
      });
    } else {
      setFilterItems({
        ...filterItems,
        [name]: filterItems[name].filter((item) => item !== value),
      });
    }
  };
  return (
    <div>
    <BrowserRouter>
    <div>
      <Routes>
      <Route path="/" element={<ProductPage totalProducts={totalProducts} products={filteredProductItem}
      handleAddToCart={handleAddToCart} handleFilter={handleFilterData} handleUserSearch={handleUserSearch} userSearch={userSearch} handleUserSearchButton={handleUserSearchButton}/>} />
          
        <Route path="/cart" element={<Cart handleAddToCart={handleAddToCart} totalProducts={totalProducts} products={product} cartData={cartData}/>} />
          
     </Routes>
        
     
    </div>
  </BrowserRouter>
    </div>
  )
}

export default TeerexApp
