import React, {Component} from 'react'
import {storedProducts, detailProduct} from '../data'

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: storedProducts,
        detailProduct
    }

    handleDetail = () => {
        console.log('details are found herre');
    }
    addToCart=()=>{
         console.log('Hello from cart')         ;
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
