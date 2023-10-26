import React from 'react'
import styles from './ProductCard.module.css'

const ProductCard = ({product,handleAddToCart}) => {
  return (
    <div className={styles.productCardContainer}>
      <img src={product.imageURL} alt={product.name} className={styles.productCardImg}/>
      
      <div className={styles.productCardButtomSection}>
       <p className={styles.productCardPrice}>Rs {product.price}</p>
       <button className={styles.addToCartBtn} value={"add"} id={product.id}  onClick={(e)=>{handleAddToCart(e)}}>Add to cart</button>
      </div>
    </div> 
  )
}

export default ProductCard
