import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 80%;
  margin: 2em;
  height: auto;
  flex-direction: row;
`;

export const SkillsContainer = styled.div``;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4em;
  height: 12em;
  width: 10em;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
  color: #b127e8;
  border: 1px solid #b127e8;
  border-radius: 10px;
  box-shadow: 0px 0px 30px 10px #b127e8;
`;

export const ImageHolder = styled.div`
  justify-content: center;
  font-size: 3.25em;
`;

export const TitleContainer = styled.div`
  font-size: 1.2em;
  margin: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
