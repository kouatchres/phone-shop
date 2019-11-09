import React, {Component} from 'react'
import {storedProducts, detailProduct} from '../data'

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: storedProducts,
        detailProduct,
        cart:[],
        modalOpen:false,
        modalProduct:detailProduct,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0
    }

componentDidMount (){
    this.setProducts();
}

setProducts=()=>{
let tempProducts= [];
storedProducts.forEach(item=> {
    const singleItem = {...item};
    tempProducts = [...tempProducts, singleItem];
});

    this.setState(()=>{
        return{ 
            products: tempProducts
    }});

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
        // make a new array of the prodcuts from the state
        let tempProducts =[...this.state.products];
        // get the index of thee specific item  to be added to cart from the new array above
   const pdtIndex = tempProducts.indexOf(this.getItem(id));
   const product= tempProducts[pdtIndex];
    product.inCart=true
    product.count =1
    product.total= product.price
  this.setState(()=>{
    return{  products:tempProducts, cart : [...this.state.cart, product]}
  }, ()=>{
  this.addTotals();
});
    };



    openModal =(id)=>{
    const product = this.getItem(id)    ;
    this.setState(()=>{
        return{
            modalProduct:product, modalOpen:true
        }
    });
    };
    closeModal =()=>{
     this.setState(()=>{
         return{modalOpen:false}
     });
    };

incrementCartCount  =(id)=>{
 let cartItems= [...this.state.cart]
  const itemToAdd = cartItems.find(item=> item.id===id);
  const indexOfItemToAdd = cartItems.indexOf(itemToAdd);
  const product = cartItems[indexOfItemToAdd];

product.count += 1;
product.total = product.count * product.price;

  this.setState(()=>{
      return{ cart: [...cartItems]}
  }, ()=>{
this.addTotals();
  })


}
decrementCartCount  =(id, count)=>{
    let tempCart= [...this.state.cart]
    const selectedProduct = tempCart.find(item=> item.id===id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
  
    product.count =product.count - 1;
    if(product.count === 0){
     this.removeCartItem(id);   
    }
    else{
  product.total = product.count * product.price;
  this.setState(()=>{
      return{ cart: [...tempCart]}
    }, ()=>{
        this.addTotals();
    })
}
  
    }
removeCartItem=(id)=>{
   let tempProducts= [...this.state.products] ;
   let tempCart= [...this.state.cart] ;
    tempCart = tempCart.filter(item =>(item.id!==id));
const index = tempProducts.indexOf(this.getItem(id));
 let removedProducts = tempProducts[index]   ;
 removedProducts.inCart=false;
 removedProducts.count=0;
 removedProducts.total=0;

 this.setState(()=>{
     return{
         cart: [...tempCart],
         products: [...tempProducts],
        }
    }, ()=>{
        this.addTotals();
 })
}
clearCart=()=>{
  this.setState(()=>{
      return {cart:[]}
  }, ()=>{
      this.setProducts();
      this.addTotals();
  }) 
}
  addTotals=()=>{
  let subTotal=0;
  this.state.cart.map(item=>( subTotal+= item.total));
  const tempTax= subTotal *0.1;
  const tax=parseFloat(tempTax.toFixed(2));
  const total = subTotal+tax;

  this.setState(()=>{
      return {
      cartSubTotal:subTotal,
      cartTax: tax,
      cartTotal:total
  }});

}

    render() {
        return (
            <ProductContext.Provider
                value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                openModal:this.openModal,
                closeModal:this.closeModal,
                incrementCartCount:this.incrementCartCount,
                decrementCartCount:this.decrementCartCount,
                removeCartItem:this.removeCartItem,
                clearCart :this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductConsumer, ProductProvider}
