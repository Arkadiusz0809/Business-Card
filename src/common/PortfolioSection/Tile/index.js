import { Section, Title, Description, Link, LinkName, LinkCode } from "./styled"


export const Tile = ({ title, description, demo, code }) => {
    return (
        <Section>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Link>
                <LinkName>Demo:<LinkCode>{demo}</LinkCode></LinkName>
                <LinkName>Code:<LinkCode>{code}</LinkCode></LinkName>
            </Link>
        </Section>
    )
}

export default Tile;