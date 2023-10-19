import styled from "styled-components";

export const MainTitle = styled.h1`
    margin-bottom: 30px;
    text-align: center;
    color: ${props => props.theme.colors.accent};
    text-shadow: ${props => props.theme.shadows.textShadow};
    font-size: ${props => props.theme.fontSizes.l};
`;