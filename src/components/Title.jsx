import React from 'react'
import styled from 'styled-components'

const SectionTitle = styled.div`
           text-align: center;
              margin-bottom: .5rem;
              margin-top: .01rem;
    h4{
              font-size: 1.5rem;
              letter-spacing: var(--mainSpacing);
              text-transform: capitalize;
              margin-bottom: .2rem;

    }
`;

const BannerLine = styled.div `
              width: 15rem;
              height: 5px;
              margin: 0 auto;
              background: var(--primaryColor);


`;


const Title = ({title}) => {
    return (
        <SectionTitle>
            <h4>{title} </h4>
            <BannerLine></BannerLine>     
        </SectionTitle>
    )
}

export default Title
