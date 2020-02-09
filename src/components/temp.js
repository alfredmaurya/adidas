import React, { Component } from 'react';
import {Card} from 'react-bootstrap'
//import ControlledCarousel from '/cards.js';
const Tile =()=>{
return (
    <div style={{display:"flex",paddingLeft:'10%',paddingRight:'10%'}}>
        <div style={{paddingRight:'5%'}}>
    <Card style={{ width: '34rem' }}>
  <Card.Img variant="top" src="https://content.adidas.co.in/static/spotlight/HUMAN_MADE_SPOTLIGHT_30th_Jan.jpg" />
  <Card.Body>
    <Card.Title>STAN SMITH HUMAN MADE SHOES </Card.Title>
    <Card.Link href="https://shop.adidas.co.in/#!product/FX4259_stansmithhumanmade">SHOP NOW</Card.Link>
  </Card.Body>
</Card>
</div>
<div style={{}}>
    <Card style={{ width: '34rem' }}>
  <Card.Img variant="top" src="https://content.adidas.co.in/static/spotlight/pogba_spotlight_5th_Feb.jpg" />
  <Card.Body>
    <Card.Title>PREDATOR MUTATOR</Card.Title>
    <Card.Link href="https://shop.adidas.co.in/#category/Pag-60/No-0/activeStartDate_dtdesc/All/_facet_.COLLECTION_ss:(%22predator%22)">SHOP NOW</Card.Link>
  </Card.Body>
</Card>
</div>
</div>
);
}
export default Tile;

