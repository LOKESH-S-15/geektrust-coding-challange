import React from 'react'
import ProductCard from './productCard/ProductCard'
import styles from './ProductItems.module.css'
import { Grid } from '@mui/material'

const ProductsItems = ({products,handleAddToCart}) => {
    
  return (
    <Grid container spacing={4} mx={1} mt={1} className={styles.productItemsInnerWraper} >
      {products.map((each) => {
        return (
          <Grid item xs={12} sm={6} md={6} lg={4}  className={styles.productItemsInnerContanier} >
            <ProductCard product={each} key={each.name} handleAddToCart={handleAddToCart} />
          </Grid>
        );
      })}
    </Grid>
    
  )
}

export default ProductsItems
