import { List, ListTile, Title, Description, Link, LinkName, LinkCode } from "./styled"


export const Tile = ({ title, description, demo, code }) => {
    return (
        <List>
            <ListTile>
                <Title>{title}</Title>
                <Description>{description}</Description>
                {!!demo && (
                    <Link>
                        <LinkName>
                            Demo:
                            <LinkCode href={demo} target="_blank" rel="noreferrer">
                                {demo}
                            </LinkCode>
                        </LinkName>
                        <LinkName>
                            Code:
                            <LinkCode href={code} target="_blank" rel="noreferrer">
                                {code}
                            </LinkCode>
                        </LinkName>
                    </Link>
                )}
            </ListTile>
        </List>
    )
}

export default Tile;