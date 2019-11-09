import React, {Component} from 'react'
import styled from 'styled-components'
import {ButtonContainer} from './Button'
import {Link} from 'react-router-dom'
import {ProductConsumer} from './Context'


const RowStyled =styled.div`
border-radius:1rem;
box-shadow: 0 8px 8px 0 rgba(0,0,0,0.9);
display:flex;
flex-direction:column;
font-size:1.1rem;

`;
const ButtonZone = styled.div `
display: grid;
grid-template-columns:1.5fr 1fr;
grid-gap:15px;
margin :0 auto;
padding:10px;
`;
const PictureRest = styled.div `
display:grid;
grid-template-columns:1fr ;
margin :0 auto;
h5 ,p {
              margin:0 auto;
}
 
.other-text{
              margin:0 auto;
}
`;

const ModalStyled = styled.div `
background: rgba(0,0,0,0.2);
right:0;
bottom:0;
position:fixed;
top:0;
left:0;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

#modal{
  background:var(--mainWhite);
}
`;

class ProductModal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal, inCart} = value;
                    const {id, title, img, price} = value.modalProduct;

                    if (!modalOpen) {
                        return null;
                    } else {
                        return (
                            <ModalStyled>

                                <RowStyled id="modal" className="container">
                                    <PictureRest  >
                                <h5>Item Already in Cart.</h5> 
                                        <img src={img} alt={title} className="img-container"/>
                                        <div className="other-text"  >
                                                <p><strong>Title: </strong>{title}</p>
                                              <p>  <strong>Price: </strong>$ {price}</p>
                                    </div>
                                        </PictureRest>
                                        <ButtonZone>

                                            <Link to="/">
                                                <ButtonContainer 
                                                onClick={()=>{ closeModal();}} >
                                                    <p>Continue Shopping</p>
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/cart">
                                                <ButtonContainer
                                                cart
                                                    onClick={() => {closeModal();}}
                                                    >
                                                         <p>Go To Cart</p>
                                                </ButtonContainer>
                                            </Link>
                                        </ButtonZone>
                                    </RowStyled>


                            </ModalStyled>

                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}

export default ProductModal
