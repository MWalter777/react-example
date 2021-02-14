import styled from "styled-components";

const Wrapper = styled.div`
    h2{
        margin-bottom: 2px;
        margin-left: 1rem;
    }

    .row-poster{
        display: flex;
        padding: 20px;
        width: 98%;
        overflow-x: scroll;
        overflow-y: hidden;
    }

    .row-poster::-webkit-scrollbar{
        display:none;
    }

    .images{
        object-fit: contain;
        width: auto;
        max-height: 250px;
        margin-right: 1rem;
        transition: transform 500ms;
    }

    .images: hover{
        transform: scale(1.08);
    }

    .images-large{
        max-height: 150px;
    }

`;

export default Wrapper;

