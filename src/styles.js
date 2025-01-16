import styled from "styled-components";
import backgroundHome from './images/backgroundHome.png';


export const Container = styled.div`
    font-family: "Montserrat";
    overflow-x: hidden;
    margin: -0.5rem;
    background-color: #1e1e1e;
`;

export const BannerHome = styled.div`
    background-image: url(${backgroundHome});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    
    border-radius: 0px 0px 40px 40px;
    box-shadow: 0px 56px 54px 0px rgba(0, 0, 0, 0.3);

    h1 {
        text-align: center;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: 400;
        padding-top: 5rem;

        b {
            background: linear-gradient(to right, #f7e8c0, #b49e6b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-style: italic;
        }
    };

    h5 {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: 400;
        font-style: italic;
        letter-spacing: 8px;
    };
`;

export const Buttons = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
`;

export const ButtonPrimary = styled.button`
    border: 1px solid  #f7e8c0;
    background: #1e1e1e;
    padding: 0rem 2rem 0rem 2rem;
    border-radius: 4rem;
    display: flex;
    align-items: center;
    height: 3rem;
    gap: 1rem;

    h6 {
        font-family: Montserrat;
        font-size: 0.8rem;
        font-weight: 400;
        color: #ffffff;
    };

    &:hover {
        cursor: pointer;
    };
`;

export const ButtonSecondary = styled.button`
    border: 1px solid  #ffffff;
    background: none;
    padding: 0rem 2rem 0rem 2rem;
    border-radius: 4rem;
    display: flex;
    align-items: center;
    height: 3rem;
    gap: 1rem;

    h6 {
        font-family: Montserrat;
        font-size: 0.8rem;
        font-weight: 400;
        color: #ffffff;
    };

    &:hover {
        cursor: pointer;
    };
`;

export const ImageBannerHome = styled.img`
    width: 70%;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const Section = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #000;
    padding: 2rem 10rem;
    color: #fff;
    margin-top: 14rem;
`;

export const Card = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const Value = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    margin-top: 1rem;


    span {
        background: linear-gradient(to right, #f7e8c0, #b49e6b);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

export const Label = styled.p`
    font-size: 1rem;
    margin-top: -1.4rem;
`;

export const Icon = styled.img`
    width: 20%;
`;

export const TextCard = styled.div``;

export const Chip = styled.img`
    width: 12%;
    margin-left: 80%;
    margin-top: -3rem;
`;

export const AboutUs = styled.div`
    display: flex;
    gap: 4rem;
    margin-top: -4rem;
`;

export const TextAbout = styled.div`
    margin-top: 7rem;

    h1 {
        color: white;
        font-weight: 400;
        padding-top: 5rem;
        width: 34rem;

        b {
            background: linear-gradient(to right, #f7e8c0, #b49e6b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-style: italic;
        }
    };

    h5 {
        color: rgba(255, 255, 255, 0.60);
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -0.955px;
        width: 24rem;
    }
`;

export const TopicAbout = styled.div`
    gap: 1.2rem;
    display: flex;
    align-items: center;

    img {
        height: 1rem;
    }

    h5 {
        color: rgba(255, 255, 255, 0.60);
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -0.955px;
    }
`;

export const ImageMockup = styled.img`
    width: 45%;
`;