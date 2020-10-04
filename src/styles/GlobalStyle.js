import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        display:grid;
        place-items:center;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100vh;
        font-family: 'Roboto Mono', monospace;
        color: ${({ theme }) => theme.secondary};
        background-color: ${({ theme }) => theme.primary};
        user-select: none;
    }


    #root {
        position:relative;
        width:100%;
        max-width: 550px;
    }

    button:focus {
        outline:0;
    }

    html {
        font-size: 16px;
    }

    @media screen and (min-width: 320px) {
        html {
            font-size: calc(16px + 6 * ((100vw - 320px) / 680));
        }
    }
    @media screen and (min-width: 1000px) {
        html {
            font-size: 22px;
    }
}
`;
