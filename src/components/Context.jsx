import React, {Component} from 'react'
import {storedProducts, detailProduct} from '../data'

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: storedProducts,
        detailProduct
    }
    getItem =(id)=>{
        const product= this.state.products.find(pdt =>pdt.id===id);
        return product;
    };


    handleDetail = (id) => {
     const pdtForDetails =this.getItem(id); 
     this.setState(()=>{
         return {detailProduct:pdtForDetails};
     })
    }
    addToCart=(id)=>{
         console.log(`Hello from cart the is is ${id}`) ;        ;
    }
    render() {
        return (
            <ProductContext.Provider
                value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductConsumer, ProductProvider}
