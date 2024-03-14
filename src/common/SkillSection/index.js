import { Img, Section, Title, TitleContent } from "./styled";
import toolImg from "../../images/tools.svg";

const SkillSection = ({ title }) => {

    return (
        <Section>
            <TitleContent>
                <Title>{title}</Title>
            </TitleContent>
        </Section>
    )
}

export default SkillSection;