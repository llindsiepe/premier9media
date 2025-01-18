    import styled from "styled-components";

    export const Container = styled.div`
    margin-left: 2rem;
    margin-right: 2.5rem;
    border-radius: 12px;
    width: 36rem;
    background: #292929;
    box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.15);
    padding: 1rem 2rem 1rem 1.5rem;

    h5 {
        width: 34rem;
        color: rgba(255, 255, 255, 0.60);
        font-family: Montserrat;
        font-weight: 200;
        text-align: justify;

        @media (max-width: 720px) {
        max-width: 10rem;
        }
    }

    h3 {
        color: #ffff;
        font-family: Montserrat;
        font-weight: 500;
    }
    `;

    export const Name = styled.div`
    display: flex;
    gap: 0.4rem;
    margin-top: -1rem;

    img {
        padding-top: 1rem;
        width: 1rem;
        height: 1rem;
    }
    `;
