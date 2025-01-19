    import styled from "styled-components";

    export const Container = styled.div`
    margin: 1rem;
    border-radius: 12px;
    background: #292929;
    box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.15);
    padding: 1rem 2rem 1rem 1.5rem;

    h5 {
        color: rgba(255, 255, 255, 0.6);
        font-family: Montserrat, sans-serif;
        font-weight: 200;
        text-align: justify;
        width: 100%; /* Use a largura total do pai */
    }

    h3 {
        color: #fff;
        font-family: Montserrat, sans-serif;
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
