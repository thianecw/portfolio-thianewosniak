import React from 'react';
import { CardContainer, ProjectImage, ProjectName, ProjectLink, Description, GitLink } from './styles';

const ProjectCard = ({ title, description, image, link, repo }) => {
    return (
        <CardContainer>
            <div>
                <ProjectName>{title}</ProjectName>
                <ProjectLink href={link} target="_blank" rel="noopener noreferrer">
                    <ProjectImage src={image} alt={title} />
                </ProjectLink>
                <Description>{description}</Description>
            </div>

            <GitLink href={repo} target="_blank" rel="noopener noreferrer">
                <i className="devicon-github-original" />
            </GitLink>
        </CardContainer>
    );
};


export default ProjectCard;
