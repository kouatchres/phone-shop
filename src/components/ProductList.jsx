import React, {Component} from 'react'
import {ProductConsumer} from './Context'
import Product from './Product'
import styled from 'styled-components'
import Title from './Title'

const ProductLine = styled.div`
display:grid;
width:98vw;
grid-template-columns: repeat(auto-fit, minmax(400px,1fr));
  grid-gap: 2.5rem;
justify-items: center;
padding-top:1rem;
margin:0 auto;
background:var(--offWhite);
`

class ProductList extends Component {
    render() {
        return (
            <>
              <Title title="Phone List" />
              <ProductLine >
              <ProductConsumer >
                  {(value)=>{
  return value.products.map((product)=>{
      return <Product key={product.id} product={product}  />
  })
                  }}
              </ProductConsumer>
              </ProductLine>

            </>
        )
    }
}

export default ProductList
