import React from 'react';

import { TeamContainerProps } from '../types';
import { Player, PlayerContainer, PlayerDot, PositionName } from './styles';
import { formationsWithPositions } from '../constants/formations-with-positions';

const renderPlayer = (data: string[], width: number, onSelection: any) => (
  <PlayerContainer width={width}>
    {data.map((item: string) => (
      <Player key={item} onClick={onSelection(item)}>
        <PlayerDot />
        <PositionName>{item}</PositionName>
      </Player>
    ))}
  </PlayerContainer>
);

const TeamContainer = ({
  formation,
  dimension: { width },
  onPlayerClicked,
}: TeamContainerProps) => {
  const { df, cm, cdm, fw, cam } = formationsWithPositions[formation];

  const handlePlayerClick = (position: string) => () => {
    onPlayerClicked(position);
  };

  return (
    <>
      {fw.length > 0 && renderPlayer(fw, width, handlePlayerClick)}

      {cam.length > 0 && renderPlayer(cam, width, handlePlayerClick)}

      {cm.length > 0 && renderPlayer(cm, width, handlePlayerClick)}

      {cdm.length > 0 && renderPlayer(cdm, width, handlePlayerClick)}

      {df.length > 0 && renderPlayer(df, width, handlePlayerClick)}

      <PlayerContainer width={width}>
        <Player onClick={handlePlayerClick('GK')}>
          <PlayerDot />
          <PositionName>GK</PositionName>
        </Player>
      </PlayerContainer>
    </>
  );
};

export default TeamContainer;
