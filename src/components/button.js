import React from "react";
import "./button.css";
import {
  ButtonToolbar,
  Popover,
  Button,
  OverlayTrigger,
  PopoverTitle
} from "react-bootstrap";
const HeaderButton = () => {
  return (
    <div class="dropdown">
  <button class="dropbtn">Shopping</button>
  <div class="dropdown-content">
    <a href="https://shop.adidas.co.in/#c/men-products/Pag-60/No-0/0">Men</a>
    <a href="https://shop.adidas.co.in/#c/women-products/Pag-60/No-0/0">Women</a>
    <a href="https://shop.adidas.co.in/#c/kids-products/Pag-60/No-0/0">Kids</a>
  </div>
</div>
    

  );
};
export default HeaderButton;
