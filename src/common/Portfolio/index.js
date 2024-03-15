import { Section, StyledGithubIcon, Title, SubTitle, Header, Content } from "./styled"
import Tile from "./Tile"

export const Portfolio = ({ title, subtitle }) => {

    return (
        <Section>
            <Header>
                <StyledGithubIcon />
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
            </Header>
            <Content>
                <Tile
                    title="To Do List (React)"
                    description="This is an application that will help the user to become an organized person. The user can enter any phrase that appears below and then be able to deselect the task after it is completed"
                    demo={"https://arkadiusz0809.github.io/Todo-list-react/"}
                    code={"https://github.com/Arkadiusz0809/Todo-list-react"}
                />
                <Tile
                    title="Currency Converter"
                    description="It is an application that calculates the value entered on the value for the selected currency. The user can choose one of over 150 currencies. Negative values are not counted."
                    demo={"https://arkadiusz0809.github.io/currency-converter-react-single/"}
                    code={"https://github.com/Arkadiusz0809/currency-converter-react-single"}
                />
                <Tile
                    title="Personal Homepage"
                    description="Something about me"
                    demo={"https://arkadiusz0809.github.io/Homepage/"}
                    code={"https://github.com/Arkadiusz0809/Homepage"}
                />
                <Tile
                    title="To Do List"
                    description="This is an application that will help the user to become an organized person. The user can enter any phrase that appears below and then be able to deselect the task after it is completed"
                    demo={"https://arkadiusz0809.github.io/Todo-list/"}
                    code={"https://github.com/Arkadiusz0809/Todo-list"}
                />
            </Content>
        </Section>

    )
}

export default Portfolio;