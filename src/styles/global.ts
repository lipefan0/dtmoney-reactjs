import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F0F2F5;
        --text: #969CB3;
        --title: #363F5F;
        --shape: #FFFFFF;
        --red: #E62E4D;
        --green: #33CC95;
        --blue: #5429CC;
        --blue-light: #6933FF;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // font-size: 16px (Desktop)

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialised;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position:fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;

        display:flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        padding:3rem;
        background: var(--background);
        position: relative;
        border-radius: 0.24rem;
        border: 0;
    }

    .react-modal-close {
        position: absolute;
        border: 0;
        background: transparent;
        top: 1.5rem;
        right: 1.5rem;

        transition: filter 0.2s ease;

        &:hover {
            filter: saturate(10);
        }
    }
`;