import React from 'react'
import styled from 'styled-components'

const CountButtonContainer = styled.div `
 button{
 /* font-size:0.9rem;
font-weight:200;
border: .09rem  solid var(--mainBlack); */
color: var(--mainBlack);
cursor: pointer;
              
}

`;
function CountButton() {
    return (
        <CountButtonContainer>
                      <button>-</button>
        </CountButtonContainer>
    );
}

export default CountButton
