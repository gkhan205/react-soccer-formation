import React, { useMemo } from 'react';

require('./styles.css');

const pitch = require('./img/pitch.svg');

export interface Props {
  formation: string;
}

const createPlayers = (numberOfPlayers: number = 0) => {
  const elems = [];

  for (let i = 0; i < numberOfPlayers; i++) {
    elems.push(<div key={numberOfPlayers + i} className="player" />);
  }

  return elems;
};

const Formation = ({ formation = '4-1-2-3' }: Props) => {
  const form = useMemo(() => {
    return formation.split('-');
  }, [formation]);

  return (
    <>
      <div className="formation-container">
        <img src={pitch} alt="" />
        <div className="field-container">
          <div className="player-container">
            <div className="player" />
          </div>

          {form.map((item) => (
            <div className="player-container">
              {createPlayers(parseInt(item))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Formation;
