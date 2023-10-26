import React from 'react'
import FilterCheckBox from './FilterCheckBox'
import styles from './Filter.module.css'

const Filter = ({handleFilter}) => {

  return (
    <div className={styles.catagoryContainer}>

      <div className={styles.catagorysection}>
        <h1 className={styles.filterCatagoryName}>Colour</h1>
        
        <FilterCheckBox name={"color"} value={"Red"} handleFilter={handleFilter}/>
        <FilterCheckBox name={"color"} value={"Blue"} handleFilter={handleFilter}/>
        <FilterCheckBox name={"color"} value={"Green"} handleFilter={handleFilter}/>
      </div>
      <div className={styles.catagorysection}>
        <h1 className={styles.filterCatagoryName}>Gender</h1>
        <FilterCheckBox name={"gender"} value={"Men"} handleFilter={handleFilter}/>
        <FilterCheckBox name={"gender"} value={"Women"} handleFilter={handleFilter}/>
      </div>
      <div className={styles.catagorysection}>
        <h1 className={styles.filterCatagoryName}>Price</h1>
        <FilterCheckBox name={"price"} value={"0-250"} handleFilter={handleFilter}/>
        <FilterCheckBox name={"price"} value={"251-450"} handleFilter={handleFilter}/>
        <FilterCheckBox name={"price"} value={"450"} handleFilter={handleFilter}/>
      </div>
      <div className={styles.catagorysection}>
        <h1 className={styles.filterCatagoryName}>Type</h1>
        <FilterCheckBox name={"type"} value={"polo"} handleFilter={handleFilter}/>
        <FilterCheckBox name={"type"} value={"Hoodie"} handleFilter={handleFilter}/>
        <FilterCheckBox name={"type"} value={"Basic"} handleFilter={handleFilter}/>
      </div>
      
    </div>
  )
}

export default Filter
