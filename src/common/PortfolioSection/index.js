import { Section, Img, Title, SubTitle, Content} from "./styled"
import shape from "../../images/Shape.svg"
import Tile from "./Tile"

export const PortfolioSection = ({title, subtitle}) => {

    return(
        <Section>
            <Img src={shape} />
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
            <Content>
                <Tile 
                    title="To Do List"
                    description="This is an application that will help the user to become an organized person. The user can enter any phrase that appears below and then be able to deselect the task after it is completed"
                    demo={"https://arkadiusz0809.github.io/Todo-list-react/"}
                    code={"https://github.com/Arkadiusz0809/Todo-list-react"}
                />
            </Content>
        </Section>

    )
}

export default PortfolioSection;