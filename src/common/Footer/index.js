import { SocialIcons } from "./icons";
import { Container, Welcome, Paragraph, Email, Address } from "./styled"


export const Footer = ({ title, email, description }) => {
    return (
        <Container>
            <Welcome>{title}</Welcome>
            <Address>
                <Email href={`mailto:${email}`}>{email}</Email>
                <Paragraph>{description}</Paragraph>
                <SocialIcons />
            </Address>
        </Container>
    )
}

export default Footer;