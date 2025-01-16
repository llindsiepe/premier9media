import styled from "styled-components";

export const Container = styled.div`
    margin: 0.8rem 2rem 0.8rem 2rem;
    justify-content: space-between;
    display: flex;

    img {
        width: 20%;

        @media (max-width: 720px) {
        width: 8rem;
        }
    }
`;

export const Options = styled.div`
    display: flex;
    gap: 2rem;

    @media (max-width: 720px) {
        gap: 1rem;
    }
`;

export const ButtonLogin = styled.button`
    height: 2rem;
    width: 8rem;
    border-radius: 20px;
    background-color: #1e1e1e;
    border-color: #ffffff;
    margin-top: auto;
    margin-bottom: auto;

    h4 {
        color: white;
        font-weight: 400;
        text-align: center;
        margin-top: auto;
        margin-bottom: auto;
        font-family: Montserrat;
    }

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 720px) {
        width: 6rem;
    }
`;

export const OptionsMenu = styled.div`
    display: flex;
    gap: 1rem;

    button {
        font-family: Montserrat;
        font-size: 1rem;
        border: none;
        background: none;

        &:hover {
        cursor: pointer;
        transition: 0.5s;
        }

        h5 {
        font-weight: 400;
        color: #ffffff;
        }
    }

    @media (max-width: 720px) {
        display: none;
    }
`;