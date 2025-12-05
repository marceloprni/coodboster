import styled from "styled-components";

export const DivGeral = styled.div`
    height: 200px;
    width: 50%;
    background-color: #856c6c;
    border-radius: 10%;
    p {
        color: ${({pChange}) => (pChange) ? 'blue' : 'green'};
    }
`

export const StylesCard = styled.h2`
    font-size: 32px;
    
`