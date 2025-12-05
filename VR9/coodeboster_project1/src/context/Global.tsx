
// 1. Importação correta: createGlobalStyle
import { createGlobalStyle } from 'styled-components';

// 2. Nome com letra Maiúscula: GlobalStyle
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* 
       DICA: É perigoso colocar width e background no seletor "*" 
       porque isso afeta cada ícone, span e botão.
       Mova essas propriedades para o body ou um container.
    */
    body {
        width: 100%;
        background-color: #856c6c;
        font-family: sans-serif;
    }

    /* Exemplo de container centralizado se você quer o layout em 80% */
    .container {
        width: 80%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px 15px;
    }
`

export default GlobalStyle;