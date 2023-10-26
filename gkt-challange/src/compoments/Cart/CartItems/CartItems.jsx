import React from 'react'
import styles from "./CartItems.module.css"
const CartItems = ({product,handleCartProductsData}) => {

  return (
    <div className={styles.cartItemsContainer}>
      <img src={product[0].imageURL} alt={product[0].name} className={styles.cartItemsImg}/>
      
      <div className={styles.cartItemsDetailsContainer}>
         <p className={styles.cartItemsDetails}>{product[0].name}</p>
         <p className={styles.cartItemsDetails}>RS {product[0].price} </p>
      </div>
      <div className={styles.cartItemsQtyContainer}>
        <button className={styles.cartItemsqtyButton} value={"add"} id={product[0].id} onClick={(e)=>{handleCartProductsData(e)}}>+</button>
        <p className={styles.cartItemsDetails}>{product.qty}</p>
        <button className={styles.cartItemsqtyButton} value={"subtract"} id={product[0].id} onClick={(e)=>{handleCartProductsData(e)}}>-</button>
      </div>
      <button className={styles.cartItemsDeleteButton} id={product[0].id} onClick={(e)=>{handleCartProductsData(e)}} value={"delete"} >delete</button>
      
    </div>
  )
}

export default CartItems
