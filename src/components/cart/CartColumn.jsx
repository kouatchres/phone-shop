import React from 'react'
import styled from "styled-components";

const HeaderStyled = styled.div`
display:grid;
grid-template-columns: 1fr 4fr 2fr 2fr 2fr 4fr;
grid-gap:10px;
background:var(--lightGrey);
font-size:1.2rem;
padding: 0 0 0 30px;
border-bottom: 0.1rem solid var(--mainblack);
`;


function CartColumn() {
    return (
        <HeaderStyled>
            <p>Image</p>
            <p>Product Name</p>
            <p>Price ($)</p>
            <p>Quantity</p>
            <p>Remove</p>
            <p>Total ($)</p>
        </HeaderStyled>
    )
}

export default CartColumn
