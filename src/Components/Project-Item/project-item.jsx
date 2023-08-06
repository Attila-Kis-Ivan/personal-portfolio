import {
  FlipCard,
  FlipCardInner,
  FlipCardFront,
  FlipCardBack,
  Heading,
  Paragraph,
} from "./project-item.styles.jsx";

const ProjectItem = ({ project }) => {
  const { imageUrl, description } = project;

  return (
    <FlipCard>
      <FlipCardInner>
        <FlipCardFront imageUrl={imageUrl} />
        <FlipCardBack>
          <Heading>Descreption</Heading>
          <Paragraph>{description}</Paragraph>
        </FlipCardBack>
      </FlipCardInner>
    </FlipCard>
  );
};

export default ProjectItem;
