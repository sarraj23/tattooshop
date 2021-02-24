import styled from 'styled-components'

export const ProductsContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) /2);
    background: black;
    color: white;
`;

export const ProductsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`;
export const ProductCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;

`;
export const ProductImg = styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px darkgray;

`;

export const ProductsHeading = styled.h1`
    font-weight: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 4rem;

`;

export const ProdcutTitle = styled.h2`
    font-weight: 400;
    font-size: 30px;
    color: darkred;
    
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`;

export const ProductDesc = styled.p`
    margin-bottom: 1rem;
    font-style: italic;
    font-size: 24px;
`;
export const ProductPrice = styled.p`
    margin-bottom: 1rem;
    font-size: 2rem;
    color: darkred;
`;

export const ProductButton = styled.button`
    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    background: whitesmoke;
    color: black;
    transition: 0.2 ease-out;

    &:hover {
        background: darkgray;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: darkred;
    };

`;