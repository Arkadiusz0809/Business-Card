import { Header, Paragraph, Wrapper, Button, Icon } from "./styled";
import { githubUsername } from "../../githubUsername";

export const ErrorBox = () => (
    <Wrapper>
        <Icon />
        <Header>Oooops! something went&nbsp;wrong...</Header>
        <Paragraph>
            Sorry, failed to load Github&nbsp;projects.<br />
            You can check them directly&nbsp;on&nbsp;Github.
        </Paragraph>
        <Button href={`https://github.com/${githubUsername}`} target="_blank">Go to Github</Button>
    </Wrapper>
);