// @ts-ignore
import styled from 'styled-components';

export const AppCssContainer = styled.div`
  --main-height: 600px;
  --player-dot-size: 24px;

  --player-box-bg-color: #edae34;
  --player-box-bodrer-color: #0d1757;
  --player-box-text-color: #0d1757;
`;

export const FormationContainer = styled.div`
  width: 100%;
  height: var(--main-height);
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
  width: 100%;
  height: calc(var(--main-height) - 100px);
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  position: absolute;

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 280px;
  }

  @media (max-width: 320px) {
    height: 220px;
  }
`;

export const PlayerContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Player = styled.div`
  width: var(--player-dot-size);
  height: var(--player-dot-size);
  border-radius: 50%;
  background: var(--player-box-bg-color);
  border: solid 1px var(--player-box-bodrer-color);
  color: var(--player-box-text-color);

  @media (max-width: 768px) {
    --player-dot-size: 15px;
  }
`;
