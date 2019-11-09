import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {ProductConsumer} from './Context'
import styled from 'styled-components'
import Title from './Title'
import {ButtonContainer} from './Button'

const ButtonZone=styled.div`
display: grid;
grid-template-columns:1fr 3fr;
grid-gap:.5rem;

`;


const SingleProduct = styled.section `
display:flex;
flex-direction:column;
margin :0 auto;
width: 90vw;
`;

const PdtDetails = styled.div `
display:grid;
grid-template-columns: 1fr 2fr;
grid-gap:10px;
padding:10px;

.ImgProper:hover{
    transform:scale(1.8);
    transition: all 2s linear;
}
`;

const GenInfo = styled.div `
display:flex;
flex-direction:column;
font-size:1.5rem;
font-weight:400;
`;

class ProductDetails extends Component {
    render() {
        return ( <> <ProductConsumer>
            {value => {
                const {
                    id,
                    title,
                    price,
                    info,
                    inCart,
                    img,
                    company
                } = value.detailProduct;
                return (
                    <SingleProduct >
                        <Title title={title}/>
                        <PdtDetails className="detail-pdt">
                            <img src={img} alt={title} className="ImgProper"/>
                            <GenInfo>
                                <span>
                                    <strong>Title:</strong>
                                    {title}</span>
                                <span>
                                    <strong>Company:</strong>
                                    {company}</span>
                                <span>
                                    <strong>Price:</strong>
                                    ${price}</span>
                                <span>
                                    <strong>In Cart:</strong>
                                    {inCart}</span>
                                <span>
                                    <strong>
                                        <p>Other Info:</p>
                                    </strong>
                                    <p>
                                        {info}</p>
                                </span>

                            <ButtonZone>

                            <Link to="/" >
                                <ButtonContainer>
                                  <p>products</p>
                                </ButtonContainer>
                            </Link>
                            <Link to="/cart"  >
                                <ButtonContainer
                                disabled={inCart? true:false}
                                onClick={()=>{
                                    value.addToCart(id);
                                    value.openModal(id);
                                }}
                                cart  >
                             { inCart ? <p>In Cart</p>: <p>Add To Cart</p>} 
                                </ButtonContainer>
                            </Link>
                            </ButtonZone>
                            </GenInfo>
                        </PdtDetails>
                    </SingleProduct>

                )

            }}
        </ProductConsumer> 
        </>  
        )
    }
}

export default ProductDetails