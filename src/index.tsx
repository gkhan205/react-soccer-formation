import React, { useMemo } from 'react';
import {
  AppCssContainer,
  FieldContainer,
  FormationContainer,
  PitchImage,
  Player,
  PlayerContainer,
} from './styles';

const pitch =
  'https://res.cloudinary.com/dvivtol4t/image/upload/v1666955101/pitch_okhpmb.svg';

export interface Props {
  formation: string;
}

const createPlayers = (numberOfPlayers: number = 0) => {
  const elems = [];

  for (let i = 0; i < numberOfPlayers; i++) {
    elems.push(<Player key={numberOfPlayers + i} />);
  }

  return elems;
};

const Formation = ({ formation = '4-1-2-3' }: Props) => {
  const form = useMemo(() => {
    return formation.split('-');
  }, [formation]);

  return (
    <AppCssContainer>
      <FormationContainer>
        <PitchImage src={pitch} alt="" />
        <FieldContainer>
          <PlayerContainer>
            <Player />
          </PlayerContainer>

          {form.map((item) => (
            <PlayerContainer>{createPlayers(parseInt(item))}</PlayerContainer>
          ))}
        </FieldContainer>
      </FormationContainer>
    </AppCssContainer>
  );
};

export default Formation;
