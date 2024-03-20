import Button from "../../../Header";
import { ReactComponent as WarningIcon } from "./error-icon.svg";
import { Header, Paragraph, Wrapper } from "./styled";
import { githubUsername } from "../../githubUsername";

export const ErrorBox = () => (
    <Wrapper>
        <WarningIcon />
        <Header>Oooops! something went&nbsp;wrong...</Header>
        <Paragraph>
            Sorry, failed to load Github&nbsp;projects.<br />
            You can check them directly&nbsp;on&nbsp;Github.
        </Paragraph>
        <Button href={`https://github.com/${githubUsername}`} target="_blank">Go to Github</Button>
    </Wrapper>
);