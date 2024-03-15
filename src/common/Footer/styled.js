import styled from "styled-components";

export const Container = styled.div`
    max-width: 691px;
    margin: 120px 142px;
`;

export const Welcome = styled.caption`
    font-weight: 700;
    font-size: 12px;
    color: ${({theme}) => theme.color.slategray};
    display: flex;
    margin-bottom: 24px;
`;

export const Email = styled.a`
    font-weight: 900;
    font-size: 32px;
    margin-bottom: 24px;
`;

export const Description = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 25.2px;
    margin-bottom: 56px;
`;

export const Icons = styled.div`
`;

export const Icon = styled.img`

`;