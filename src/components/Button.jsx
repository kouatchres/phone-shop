import styled from 'styled-components'

export const ButtonContainer = styled.button `
text-transform:capitalize;
min-width:150px;
font-size:1.01rem;
font-weight:900;
background:transparent;
border: .09rem  solid var(--greatBlue);
border-color: ${props => props.cart ?  "var(--primaryColor)": "var(--greatBlue)"};
color: ${props => props.cart ?  "var(--primaryColor)": "var(--greatBlue)"};
/* color: var(--greatBlue); */
border-radius:.9rem;
/* padding: .02rem 0.4rem; */
cursor: pointer;
/* margin: 0.2rem 0.5rem .02rem 0; */
transition: all 2s linear ;
&:hover{
              background: ${props => props.cart ?  "var(--primaryColor)": "var(--greatBlue)"};
              /* background:var(--greatBlue); */
              color:var(--mainWhite);
}
&:focus{
              outline:none;
}


`;

