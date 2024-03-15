import { Container, Welcome, Description, Email, Icon, Icons } from "./styled"
import git from "../../images/Fill-51.svg"


export const Footer = ({ title, adres, description }) => {
    return (
        <Container>
            <Welcome>{title}</Welcome>
            <Email>{adres}</Email>
            <Description>{description}</Description>
            <Icons>
                <Icon src={git} />
            </Icons>

        </Container>
    )
}

export default Footer;