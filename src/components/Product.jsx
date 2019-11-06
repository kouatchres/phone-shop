import React, {Component} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {ProductConsumer} from './Context'



class Product extends Component {
    render() {
        const {
            id,
            title,
            price,
            inCart,
            img
        } = this.props.product;
        return (
            <EachRoom >

            <ProductConsumer>
        {value => (
                        <div className="img-container"
                            onClick={()=>{value.handleDetail(id)}}  >
                        
                            <div className="price-top">
                                <h6>${price}</h6>
                            </div>

                            <Link to="/details" >
                            <img src={img} 
                            alt={title} 
                            className="card-img-top" 
                            />
                            </Link>
                            <button 
                            className="cart-btn"
                            disabled={inCart ? true: false} 
                            onClick={()=>{value.addToCart(id)}}  >
        {inCart ? (<p disabled>In Cart</p>) : (<p>Add To Cart</p>)}
                            </button>
                            <p className="room-info">
                                {title}
                            </p>
                </div>
  )}
            </ProductConsumer>
            </EachRoom>

        )
    }
}

const EachRoom = styled.article `
 border-radius:20px;
 background:var(--mainWhite);
 /* height:465px; */

 .img-container{
    position: relative;
    overflow:hidden;

 }
 .card-img-top{
     transition: all 2s linear;
    }
    .img-container:hover .card-img-top{
        transform:scale(1.25);
    }
    
    &:hover{
        box-shadow:0 5px 10px 0 rgba(0,0,0,0.5);
        
    }
    p{
        border-bottom-left-radius:10px;
        border-bottom-right-radius:10px;
    }
    
    .img-container:hover .cart-btn{
        transform:translate(0,0);
        transition: all 2s linear;
     }
     .cart-btn {
background:var(--greatBlue);
position: absolute;
top:0;
right:0;
color:var(--mainWhite);
font-size:0.8rem;
border-radius: 0 .6rem 0 .6rem;
align-items:center;
font-weight:bold;
outline:none;
border:none;
height:60px;
cursor:pointer;
transform: translate(100%,100%);
 }


`;

Product.propTypes={
product: PropTypes.shape({
    id:PropTypes.number,
    title:PropTypes.string,
    price:PropTypes.number,
    image:PropTypes.string,
    inCart:PropTypes.bool

}).isRequired

}

export default Product
