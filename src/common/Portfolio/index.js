import { useDispatch } from "react-redux"
import { Section, StyledGithubIcon, Title, SubTitle, Header } from "./styled"
import { fetchRepositories } from "../../features/PersonalHomepage/PersonalHomepageSlice";
import { useEffect } from "react";
import { githubUsername } from "./githubUsername";
import { Content } from "./Content";

export const Portfolio = ({ title, subtitle }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRepositories(githubUsername));
    }, [dispatch]);

    return (
        <Section>
            <Header>
                <StyledGithubIcon />
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
            </Header>
            <Content />
        </Section>

    );
};