import React from 'react'
import styled from 'styled-components'

const CountButtonContainer = styled.div `
 button{
color: var(--mainBlack);
cursor: pointer;
              
}

`;
function CountButton() {
    return (
        <CountButtonContainer>
                      <button>+</button>
        </CountButtonContainer>
    );
}

export default CountButton
