import React from 'react'
import {
    ProductsContainer,
    ProductsHeading,
    ProductsWrapper,
    ProdcutTitle,
    ProductDesc,
    ProductPrice,
    ProductButton,
    ProductImg,
    ProductInfo,
    ProductCard,
} from './ProductsElements';

const Products = ({ heading, data }) => {
    return (
        <ProductsContainer>
            <ProductsHeading>{ heading }</ProductsHeading>
            <ProductsWrapper>
                {data.map((product, index) => {
                return (
                    <ProductCard key={index}>
                        <ProductImg src={product.img} alt={product.alt} />
                        <ProductInfo>
                            <ProdcutTitle>{product.name}</ProdcutTitle>
                            <ProductDesc>{product.desc}</ProductDesc>
                            <ProductPrice>{product.price}</ProductPrice>
                            <ProductButton>{product.button}</ProductButton>
                       </ProductInfo>
                    </ProductCard>
                    );
                })}  
            </ProductsWrapper>
        </ProductsContainer>
    )
}

export default Products
