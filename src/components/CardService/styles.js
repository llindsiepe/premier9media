import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    margin-bottom: 4rem;

    img {
        width: 3%;
    }
`;

export const Content = styled.div`
    border-bottom: 1px solid  #f7e8c0;
`;

export const OpenDropDrown = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 1rem;
        height: 2.5rem;
    }
`;

export const Title = styled.h1`
    color: white;
    font-weight: 400;
`;

export const TextCard = styled.h5`
    color: rgba(255, 255, 255, 0.60);
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-align: justify;
    max-width: 60rem;
    margin-top: 0rem;
`;