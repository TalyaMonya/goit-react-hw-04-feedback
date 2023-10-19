import styled from "styled-components";

export const Button = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 8px 16px;
    margin: 0;
    font-weight: ${p => p.theme.fontWeights.bold};

    border: none;
    border-radius: ${p => p.theme.radii.normal};

    box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
    transition: all 200ms ease-in-out;

    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
    cursor: pointer;

    &:hover, :focus{
        background-color: ${p => p.theme.colors.secondary};
        color: ${p => p.theme.colors.accent};
        
        svg {
            fill: ${p => p.theme.colors.accent};
            stroke: ${p => p.theme.colors.accent};
            }
        }
    &:active {
        scale: 0.9;
    }
`