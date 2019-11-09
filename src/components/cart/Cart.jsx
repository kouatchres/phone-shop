import React, {Component} from 'react'
import CartColumn from './CartColumn'
import Title from '../Title'
import {ProductConsumer} from '../Context'
import CartList from './CartList'
import EmptyCart from './EmptyCart'
import styled from 'styled-components'
import CartTotals  from "./CartTotals";

const CartSpacing =styled.section`
width:92vw;
margin:0 Auto;
/* border-radius:.8rem;
box-shadow:0 4px 8px 0 rgba(0,0,0,0.5); */
`;
class Cart extends Component {
    render() {
        return (

            <CartSpacing>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if (cart.length > 0) {
                            return (
                                <>
                                 <Title  title = "Your Cart" />
                                  <CartColumn/>
                                   <CartList value={value}/>
                                   <CartTotals  value={value} /> 
                                   </>
                                   )
                        } else {
                            return (<EmptyCart/>)
                        }

                    }}

                </ProductConsumer>
            </CartSpacing>
        );
    }
}

export default Cart

 