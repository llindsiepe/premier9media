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

    @media (max-width: 720px) {
        height: 60vh;
    }
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

    @media (max-width: 720px) {
        top: 75%;
        width: 90%;
    }
`

export const Section = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #000;
    padding: 2rem 10rem;
    color: #fff;
    margin-top: 14rem;

    @media (max-width: 720px) {
        margin-top: 8rem;
        display: inline-block;
        width: 100%;
        padding: 2rem 20%;
    }
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
    max-width: 20%;

    @media (max-width: 720px) {
        max-width: 10%;
    }
`;

export const TextCard = styled.div``;

export const Chip = styled.img`
    width: 12%;
    margin-left: 80%;
    margin-top: -3rem;

    @media (max-width: 720px) {
        width: 25%;
        margin-left: 70%;
    }
`;

export const AboutUs = styled.div`
    display: flex;
    gap: 4rem;
    margin-top: -4rem;

    @media (max-width: 720px) {
        display: inline-block;
        margin-top: 0rem;
    }
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
        font-weight: 300;
        line-height: normal;
        width: 28rem;

        @media (max-width: 720px) {
            width: 22rem;
        }
    }

    @media (max-width: 720px) {
        padding: 0rem 2rem;
        margin-top: 0rem;
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
        font-weight: 300;
        line-height: normal;

        @media (max-width: 720px) {
            width: 20rem;
        }
    }
`;

export const ImageMockup = styled.img`
    width: 45%;

    @media (max-width: 720px) {
        width: 70%;
    }
`;

export const Services = styled.div``;

export const Intro = styled.div`
    img {
        margin-left: 50%;
        width: 2%;
        padding-top: 2rem;

        @media (max-width: 720px) {
            width: 6%;
            margin-left: 48%;
            padding-top: 4rem;
        }
    }

    h1 {
        color: white;
        font-weight: 400;
        padding-top: 2rem;
        text-align: center;

        b {
            background: linear-gradient(to right, #f7e8c0, #b49e6b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-style: italic;
        }

        @media (max-width: 720px) {
            padding-top: 0rem;
        }
    };

    h5 {
        color: rgba(255, 255, 255, 0.60);
        font-family: Montserrat;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        text-align: center;
    };

    h2 {
        color: white;
        font-weight: 300;
        text-align: center;

        b {
            font-style: italic;
            font-weight: 600;
        }
    };
`;

export const Depoiments = styled.div`
`;

export const DepoimentsCarousel = styled.div`
    margin: 14rem 5rem 12rem 4rem;

    @media (max-width: 720px) {
        margin: 7rem 4rem 2rem 4rem;
    }
`;

export const BackgroundDepoiments = styled.img`
    width: 100%;
    position: absolute;
    top: 220rem;

    @media (max-width: 720px) {
        top: 245rem;
    }
`;

export const Meeting = styled.div`
    border-radius: 60px 60px 0px 0px;
    background-color: #141414;
    margin: 16rem 0rem 0rem 0rem;
    padding: 5rem 0rem;

    @media (max-width: 720px) {
        margin: 8rem 0rem 0rem 0rem;
        padding: 2rem 0rem;
    }
`;

export const Calendly = styled.div`
    @media (max-width: 720px) {
        max-width: 80%;
        margin-left: 10%;
    }
`;