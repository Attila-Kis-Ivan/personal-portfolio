import styled from "styled-components";

export const FlipCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  align-content: space-between;
  justify-content: center;
  text-align: center;
  width: 100vw;
  margin-top: 3em;
  margin-left: 5em;
  margin-right: 5em;
  margin-bottom: 14em;
  width: 15em;
  height: 20.25em;
  cursor: pointer;
  margin-top: 10em;
`;

export const FlipCardInner = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 1.5s;
  transform-style: preserve-3d;

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const FlipCardFront = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 24px;
  box-shadow: 00px 0px 20px 10px #b127e8;
`;
export const CoverImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
  border: none;
`;

export const FlipCardBack = styled.div`
  background: #2a2828;
  color: #fff;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 24px;
  padding: 0px 18px;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 24px;
  box-shadow: 0px 0px 20px 10px #b127e8;
`;

export const Heading = styled.h2`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 1.1em;
  color: #b127e8;
`;
export const Paragraph = styled.p`
  font-family: "Montserrat";
  font-weight: 300;
  font-size: 1em;
`;
