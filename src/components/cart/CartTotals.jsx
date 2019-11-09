import React from 'react'
import {Link} from 'react-router-dom';
import {ButtonContainer} from '../Button'
import styled from 'styled-components'


const CartTotalsContainer = styled.div`
padding-top:10px;
float: right;
text-align: right;
padding-right: 40px;
`;
function CartTotals({value}) {
    const {cartTax, cartTotal, cartSubTotal, clearCart } = value;
    return ( 
    <> 
      <CartTotalsContainer>
        <div className="clearButton">
            <Link to="/">

                <ButtonContainer
                    onClick={() => {
                    clearCart()
                }}>
                    <p>Clear Cart</p>
                </ButtonContainer>
            </Link>
            </div>
            <h5>
                <strong><span className="text-title">Sub Total :</span></strong>
                <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
                <strong><span className="text-title">Tax :</span></strong>
                <strong>$ {cartTax}</strong>
            </h5>
            <h5>
                <strong><span className="text-title">Total :</span></strong>
                <strong>$ {cartTotal}</strong>
            </h5>

        </CartTotalsContainer>
    </>   
     );
}

export default CartTotals