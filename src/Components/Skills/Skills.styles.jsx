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

export const SkillsContainer = styled.div`
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  width: 60%;
  justify-content: space-around;
  align-items: center; */
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4em;
  height: 12em;
  width: 10em;

  color: #b127e8;
  border: 1px solid #b127e8;
  border-radius: 10px;
  box-shadow: 0px 0px 30px 10px #b127e8;
`;

export const ImageHolder = styled.div`
  justify-content: center;
`;
