import { List, Tile, Title, Description, Links, LinksRow, LinksValue, Link } from "./styled"


export const Repositories = ({ repositories }) => (
    <List>
        {repositories.map(({ id, name, description, homepage, html_url }) => (
            <Tile key={id}>
                <Title>{name}</Title>
                <Description>{description}</Description>
                <Links>
                    {!!homepage && (
                        <LinksRow>
                            <dt>Demo:</dt>
                            <LinksValue>
                                <Link href={homepage} target="_blank" rel="noreferrer">{homepage}</Link>
                            </LinksValue>
                        </LinksRow>
                    )}
                    <LinksRow>
                        <dt>Code:</dt>
                        <LinksValue>
                            <Link target="_blank" rel="noreferrer" href={html_url}>{html_url}</Link>
                        </LinksValue>
                    </LinksRow>
                </Links>
            </Tile>
        ))}
    </List>
);