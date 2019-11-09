import React  from 'react'
import {ProductConsumer} from '../Context'
import CartItem from './CartItem'

function Cart () {
        return (

            <section>
                <ProductConsumer>
                    {(value) => {
                        console.log(value);
                        return (
                            <div className="cartItems">
                                {value
                                    .cart
                                    .map(item => {
                                        return (<CartItem key={item.id} cart={item} />)
                                    })}
                            </div>
                        )
                    }}
                </ProductConsumer>
            </section>
        )
    }

export default Cart
