import React, { Component } from 'react';
import Product from './components/Product';
import {detailProduct, storeProducts} from './data';

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
  state={
      products: [],
      detailProduct: detailProduct
  };
  componentDidMount(){
    this.setProducts();
  }

  setProducts = ()=>{
      let tempProducts = [];
      storeProducts.forEach(item => {
          const singleItem = {...item};
          tempProducts = [...tempProducts, singleItem];
      });
      this.setState(()=>{
          return {products: tempProducts}
      });
  }
  
  handleDetail=()=>{
    console.log("Detail");
  }
  addToCart=()=>{
      console.log("add to cart");
  }
    render() {
    return (
      <ProductContext.Provider value= {{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
      }}>
          {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export{
    ProductProvider, ProductConsumer
};
