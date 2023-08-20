import {
  FlipCard,
  FlipCardInner,
  FlipCardFront,
  FlipCardBack,
  TitleContainer,
  Title,
  Heading,
  Paragraph,
  BtnContainer,
  ButtonHolder,
  BtnTetx,
  Btn,
} from "./project-item.styles.jsx";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectItem = ({ project }) => {
  const { title, imageUrl, description, source, demo } = project;

  return (
    <FlipCard>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <FlipCardInner>
        <FlipCardFront imageUrl={imageUrl} />
        <FlipCardBack>
          <Heading>Descreption</Heading>
          <Paragraph>{description}</Paragraph>
        </FlipCardBack>
      </FlipCardInner>
      <BtnContainer>
        <ButtonHolder>
          <Btn href={source} target="_blank" rel="noreferrer">
            <BsGithub />
            <BtnTetx>GitHub</BtnTetx>
          </Btn>
        </ButtonHolder>
        <ButtonHolder>
          <Btn href={demo} target="_blank" rel="noreferrer">
            <CgWebsite />
            <BtnTetx>Demo</BtnTetx>
          </Btn>
        </ButtonHolder>
      </BtnContainer>
    </FlipCard>
  );
};

export default ProjectItem;
