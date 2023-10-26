import React from 'react'
import Header from '../Header/Header'
import CartItems from './CartItems/CartItems'
import styles from './Cart.module.css'

const Cart = ({totalProducts,products,handleAddToCart,cartData}) => {
   
    let cartItemData=[];
    let totalCartPrice=0;
    for (const id in cartData){
        let data=(products.filter((item)=>{return item.id===parseInt(id)}));
        let finalData={
            ...[...data],
            qty:cartData[id]
        }
       
        totalCartPrice+=data[0].price*parseInt(cartData[id])
        cartItemData.push(finalData);
    }
    
   
   
    
  return (
    <div>
      <Header totalProducts={totalProducts}/>
      <div className={styles.cartContainer}>
        <h1 className={styles.cartHeading}>Shopping Cart</h1>
        <div className={styles.cartProductsContainer}>
        {cartItemData.length>0 ?
            cartItemData.map((each)=>{
            return  <CartItems handleCartProductsData={handleAddToCart} key={each.id} product={each}/>
        }):
        
        <p>Add Item in Product Section</p>
    }
        
        <br/>
        
        
        </div>
        <div className={styles.CartBottomContainer}>
          <p>Total Amount :<span>Rs {totalCartPrice}</span></p>
        </div>
        
        
        
      </div>
    </div>
  )
}

export default Cart
