import { List, ListItem, Section, Title } from "./styled";

const SkillSection = ({ title, skills }) => {

    return (
        <Section>
            <Title>{title}</Title>
            <List>
                {skills && skills.map((skill, index) => (
                    <ListItem
                        key={index} 
                    >
                        {skill}
                    </ListItem>
                ))}
            </List>
        </Section>
    )
}

export default SkillSection;