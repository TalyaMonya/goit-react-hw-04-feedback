import styled from "styled-components";


export const StatisticList = styled.ul`
    padding: 12px;
    width: 320px;
    margin: 0 auto;

    border-radius: ${p => p.theme.radii.normal};
    box-shadow: ${p => p.theme.shadows.boxShadow};
    background-color: #FFD700;
`

export const StatItem = styled.p`
    display: flex;
    align-items: center;
    gap: 10px;

    margin: 15px;
    padding: 10px 15px;

    transition: all 0.2s ease-in-out;

  color: #6f31ff;
  text-shadow: ${props => props.theme.shadows.textShadow};
  svg {
    fill: ${p => p.theme.colors.accent};
    stroke: ${p => p.theme.colors.accent};
  }
`