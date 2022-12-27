// @ts-ignore
import styled from 'styled-components';

export const AppCssContainer = styled.div`
  --main-height: 600px;
  --player-dot-size: 24px;

  --player-box-bg-color: #edae34;
  --player-box-bodrer-color: #0d1757;
  --player-box-text-color: #0d1757;
  --position-name-color: #ffffff;
`;

export const FormationContainer = styled.div`
  width: 100%;
  //height: var(--main-height);
  display: flex;
  align-items: center;
  position: relative;
`;

export const PitchImage = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: auto;
`;

export const FieldContainer = styled.div`
  --height: ${(props: { height: number }) => props.height}px;
  --rows: ${(props: { rows: any }) => props.rows};

  width: 100%;
  height: calc(var(--height) - 15%);
  display: grid;
  grid-template-rows: repeat(var(--rows), 1fr);
  position: absolute;
  margin-top: 10%;

  @media (max-width: 480px) {
    margin-top: 0;
  }
`;

export const PlayerContainer = styled.div`
  width: ${(props: { width: any }) => props.width}px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Player = styled.div`
  font-size: 12px;
  text-align: center;
`;

export const PlayerDot = styled.div`
  width: var(--player-dot-size);
  height: var(--player-dot-size);
  border-radius: 50%;
  background: var(--player-box-bg-color);
  border: solid 1px var(--player-box-bodrer-color);
  color: var(--player-box-text-color);
  cursor: pointer;

  @media (max-width: 768px) {
    --player-dot-size: 15px;
  }
`;

export const PositionName = styled.p`
  font-weight: bold;
  color: var(--position-name-color);
  margin: 0;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
