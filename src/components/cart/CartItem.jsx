import React, {Component} from 'react'
import {ProductConsumer} from '../Context.jsx'
import styled from 'styled-components'

const BtnBlack =styled.span`
background:transparent;
text-transform:capitalize;
font-size:1.2rem;
/* padding-top:0; */
/* padding-bottom:0; */
padding-left:10px;
padding-right:10px;
color: var(--mainBlack);
border-radius: 0;
border: 0.1rem solid var(--mainBlack);
 
&:hover{
              background:var(--mainBlack);
              color:var(--mainWhite);
              cursor:pointer;
}
`;

const QuantityChange = styled.div`
display:grid;
grid-template-columns:repeat(3,1fr);
grid-gap:15px;
align-content:center;
justify-items:center;
/* padding-top:20px; */
max-width:100px;

`;
const TotalChange = styled.div`
display:grid;
grid-template-columns:1fr;
align-content:center;
justify-items:center;
`;
const ItemStyled =styled.div`
display: grid;
grid-template-columns: 1fr 4fr 2fr 2fr 2fr 4fr;
grid-gap:10px;
font-size:1.2rem;
font-weight:300;
padding:0;
border-bottom: solid var(--mainBlack) 0.01rem;
.img-container{
              padding:0;
              margin:0;
   /* padding:0 0 0 3rem; */
     img{
                width: 3.5rem;
                height:3.5rem;
                cursor:pointer;
                &:hover{
                              transform:scale(5);
                              transition: all 2s ease-in-out;
                }}
  }
`;



class CartItem extends Component {
    render() {
        const {id,title,count, price, total, img} = this.props.cart;
        return (
            <div>
                <ProductConsumer>
{value => {
                return (
                              <ItemStyled>
              <div className="img-container">
                <img    src={img} alt={title}/>
              </div>
              <p>{title}</p>
              <p>{price}</p>
              <QuantityChange >
              <BtnBlack className="btn-black" onClick={()=>{value.decrementCartCount(id)}} >-</BtnBlack>
              <BtnBlack className="btn-black" >{count}</BtnBlack>
              <BtnBlack className="btn-black" onClick={()=>{value.incrementCartCount(id)}} >+</BtnBlack>
              </QuantityChange>
              <QuantityChange>
              <BtnBlack className="btn-black" onClick={()=>{value.removeCartItem(id)}} >Delete</BtnBlack>
              {/* <div className="deleteItem" onClick={()=>{value.deleteItem(id)}}>Delete</div> */}
              </QuantityChange>
              <TotalChange>
              Sub Total: $ {total}
              </TotalChange>
              </ItemStyled>
                )

                    }}
                </ProductConsumer>

            </div>
        )
    }
}

export default CartItem
