import { useDispatch, useSelector } from "react-redux"
import { Section, StyledGithubIcon, Title, SubTitle, Header, Content } from "./styled"
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "../../features/PersonalHomepage/PersonalHomepageSlice";
import { useEffect } from "react";
import { githubUsername } from "./githubUsername";

export const Portfolio = ({ title, subtitle }) => {
    const dispatch = useDispatch();

    const repositoriesStatus = useSelector(selectRepositoriesStatus);
    const repositories = useSelector(selectRepositories);

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
            <Content
                status={repositoriesStatus}
                repositories={repositories}
            />
        </Section>

    )
}

export default Portfolio;