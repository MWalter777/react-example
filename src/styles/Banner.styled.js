import styled from "styled-components";

const Wrapper = styled.header`

    .banner-content{
        width: 100%;
        min-width: 100%;
        height: 50vh;
        max-height: 50%;
        background-color: rgba(0,0,0,0.4);
        color: #FFF;
        margin: 0px;
        top: 0;
        position: absolute;
        left: 0;
        padding: 1rem;
        padding-left: 2rem;
    }

    .banner-img{
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: contain;
        top: 0;
        left: 0;
        z-index: -1;
    }

    .banner-img img{
        object-fit: cover;
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
    }

    .banner-description{
        position: absolute;
        max-width: 40%;
        margin-top: 2rem;
        margin-bottom: 2rem;
        font-family: 'Vazir', sans-serif;
    }

    .banner-tittle{
        font-family: 'Vazir', sans-serif;
        font-size: 34px;
    }

    .banner-button button{
        cursor: pointer;
        color: #FFF;
        outline: none;
        border: none;
        font-weight: 700;
        border-radius: 0.2vw;
        padding-left: 2rem;
        padding-right: 2rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        background-color: rgba(51,51,51,0.5);
        margin-right: 1rem;
    }

    .banner-button button:hover{
        color: #000;
        background-color: #e6e6e6;
        transition: all 0.2s;
    }

    .bottom-faded{
        height: 7.4rem;
        background-image: linear-gradient(
            180deg,
            transparent, 
            rgba(37,37,37,0.61),
            #111
        );
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
    }


`;

export default Wrapper;

