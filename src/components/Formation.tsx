import React, { useEffect, useRef, useState } from 'react';
import {
  AppCssContainer,
  FieldContainer,
  FormationContainer,
  PitchImage,
} from './styles';
import { FormationProps as Props } from '../types';
import TeamContainer from './TeamContainer';
import { allFormations } from '../constants/all-formations';

const pitch =
  'https://res.cloudinary.com/dvivtol4t/image/upload/v1666955101/pitch_okhpmb.svg';

const Formation = ({
  formation = allFormations[0],
  onPositionSelection,
}: Props) => {
  const imageRef: any = useRef(null);

  const [dimension, setDimension] = useState({
    height: 600,
    width: 760,
  });

  useEffect(() => {
    window.addEventListener('resize', getImageHeight);

    return () => {
      window.removeEventListener('resize', getImageHeight);
    };
  }, []);

  const getImageHeight = () => {
    setDimension({
      height: imageRef.current?.height,
      width: imageRef.current?.width,
    });
  };

  return (
    <AppCssContainer>
      <FormationContainer>
        <PitchImage
          onLoad={getImageHeight}
          src={pitch}
          alt=""
          id="pitch-image"
          ref={imageRef}
        />

        <FieldContainer height={dimension.height}>
          <TeamContainer
            onPlayerClicked={onPositionSelection}
            formation={formation}
            dimension={dimension}
          />
        </FieldContainer>
      </FormationContainer>
    </AppCssContainer>
  );
};

export default Formation;
