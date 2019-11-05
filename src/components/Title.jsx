import React from 'react'
import styled from 'styled-components'

const SectionTitle = styled.div`
           text-align: center;
              margin-bottom: 4rem;
    h4{
              font-size: 2rem;
              letter-spacing: var(--mainSpacing);
              text-transform: capitalize;
              margin-bottom: 1rem;

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
