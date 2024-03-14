import { Section, Title, ListItem, List } from "./style"


const FutureSkillSection = ({ title, skills}) => {

    return(
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

export default FutureSkillSection;