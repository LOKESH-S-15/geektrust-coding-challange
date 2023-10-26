import React, { useState } from "react";
import Header from "../Header/Header";
import Filter from "../Filter/Filter";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ProductItems from "../ProductItems/ProductsItems";
import styles from "./ProductPage.module.css";


const ProductPage = ({totalProducts,products,handleAddToCart,handleFilter,handleUserSearch,userSearch,handleUserSearchButton}) => {
  const [toggle,setToggle]=useState(true);
  let toHideFilterSection='';
  if (toggle){
    toHideFilterSection=styles.filterSectionHidden;
  }
  
  
  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerContainer}>
        <Header ProductSelected totalProducts={totalProducts} />
      </div>
      
      <div className={styles.productPageContainer}>
      <div className={toHideFilterSection}>
        <div className={styles.filterContainer}>
         
            <Filter handleFilter={handleFilter} />
          </div>
        </div>
        <div className={styles.productsContainer}>
          <div className={styles.inputContainer}>
           
           <input
              className={styles.searchInput}
              placeholder="Search for products..." 
              value={userSearch}
              onChange={(e)=>{handleUserSearch(e)}}
             
            ></input>
            <button className={styles.searchButton} onClick={(e)=>{handleUserSearchButton(e)}}>
              <SearchOutlinedIcon />
            </button>
           
            

           
              <button
                onClick={()=>{setToggle(!toggle)}}
                className={styles.filterButton}
              >
                <FilterAltIcon />
              </button>
              
          </div>
          <div className={styles.ProductItemsContainer}>
            <ProductItems
              products={products}
              handleAddToCart={handleAddToCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
