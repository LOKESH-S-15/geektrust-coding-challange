import React from "react";
import {  useNavigate } from "react-router-dom";

import { IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./Header.module.css";

const Header = ({ ProductSelected, totalProducts }) => {
  const navigate = useNavigate();

 

  var isCartSelected = "";
  var isProductSelected = styles.selected;
  if (!ProductSelected) {
    isCartSelected = styles.selected;
    isProductSelected = "";
  }

  return (
    <div className={styles.headerContainer}>
      <h2>TeeRex Store</h2>
      <div className={styles.headerContent}>
        <div className={styles.headerProduct}>
          <p
            onClick={() => {
              navigate("/");
            }}
          >
            Products
          </p>
          <p className={isProductSelected}></p>
        </div>
        <div>
          <div className={styles.cartbutton}>
            <IconButton
              aria-label="cart"
              onClick={() => {
                navigate("/cart");
              }}
            >
              <Badge badgeContent={totalProducts} color="secondary">
                <ShoppingCartIcon className={styles.cartIcon} />
              </Badge>
            </IconButton>
          </div>

          <p className={isCartSelected}></p>
        </div>
      </div>
    </div>
  );
};
export default Header;
