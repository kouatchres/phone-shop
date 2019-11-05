import React, {Component} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from './Context'

class Product extends Component {
    render() {
        const {
            id,
            title,
            price,
            info,
            inCart,
            img
        } = this.props.product;
        return (

            <EachRoom >
                <div className="img-container">

                    <div className="price-top">
                        <h6>${price}</h6>
                    </div>

                    <Link to="/details" >
                    <img src={img} alt={title}/>
                    </Link>
                    <p className="room-info">
                        {title}
                    </p>
                </div>
            </EachRoom>

        )
    }
}

const EachRoom = styled.article `
 border-radius:20px;
 background:var(--mainWhite);
 height:470px;
 p{
     height:30px;
     border-bottom-right-radius:15px;
     border-bottom-left-radius:15px;
     
    }
    &:hover{
        box-shadow:0 4px 8px 0 rgba(0,0,0,0.5);

 }
`;

const ArticleContainer = styled.section `
background:var(--yellow);

`

const ImgContainer = styled.img `
    /* height:250px; */
    background:var(--mainWhite);
    cursor:pointer;
    border-radius:20px;
    padding:0;
`

const ProductWrapper = styled.div `
/* display:grid;
grid-template-columns:1fr;
grid-auto-columns:column;
grid-row-gap:0; */
`

const ProductInfo = styled.div `
padding-top:0;
padding-left:10px;
border-bottom-left-radius:15px;
border-bottom-right-radius:15px;
`

export default Product
