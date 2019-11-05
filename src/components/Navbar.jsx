import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'



const DropdownBtn=styled.button`
  background-color: var(--greatBlue);
  color: white;
  padding: .3rem;
  font-size:1.2rem;
  font-weight:200;
  cursor: pointer;
  border-style:none;
  outline:none;
  border-radius:15px;
  width:120px;
  &:hover{
      border:2px solid var(--greatBlue);
      background:transparent;
      outline:none;
    &:focus{
        outline:none;
    }
}


`;
const LeftSpace =styled.ul`
padding-left:0;
`;

const NavStyled = styled.nav`
position:relative;
color:black;
background: var(--secondaryColor);
padding-left:60px;
`;
const AllListItems = styled.li`
  color:black;
  font-size:1.1rem;
  font-weight: 400;
  padding-right:0.5rem;
  padding-left:0.5rem;
  display:inline;
  &:hover{
      cursor:pointer;
    }
    
    `;
const DropDownListItems = styled.li`
   color:black;
    font-size:.8rem;
    width:125px;
    font-weight: 300;
    display:block;
    &:hover{
        background:orange;
    }
`;

function Navbar() {
    return (
    <NavStyled  >
        <LeftSpace>
               <AllListItems><NavLink to="/cart" >Cart</NavLink></AllListItems>
               <AllListItems><NavLink to="/">Home</NavLink></AllListItems>
            <div className="dropdown">
                <DropdownBtn>Product</DropdownBtn>
                <div className="dropdown-content">
        <LeftSpace>
            <DropDownListItems><NavLink to="/cart">New Pdt</NavLink></DropDownListItems>
            <DropDownListItems><NavLink to="/product">Product</NavLink></DropDownListItems>
            <DropDownListItems><NavLink to="/details">Details</NavLink></DropDownListItems>
        </LeftSpace>
                </div>
            </div>
            <div className="dropdown">
                <DropdownBtn>Orders </DropdownBtn>
                <div className="dropdown-content">
        <LeftSpace>
            <DropDownListItems><NavLink to="/cart">New Order</NavLink></DropDownListItems>
            <DropDownListItems><NavLink to="/cart">All Orders</NavLink></DropDownListItems>
            <DropDownListItems><NavLink to="/cart">Client Order</NavLink></DropDownListItems>
        </LeftSpace>
                </div>
            </div>
        </LeftSpace>
  </NavStyled>
    );
}

export default Navbar
