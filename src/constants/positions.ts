import { formationsWithPositions } from './formations-with-positions';

export const createPositions = () => {
  let positions = [];
  for (let key in formationsWithPositions) {
    for (let subKey in formationsWithPositions[key]) {
      positions.push(...formationsWithPositions[key][subKey]);
    }
  }

  return Array.from(new Set(positions));
};

export const positions = [
  'LB',
  'LCB',
  'RCB',
  'RB',
  'CDM',
  'LCM',
  'RCM',
  'LW',
  'CF',
  'RW',
  'LM',
  'CM',
  'RM',
  'LAM',
  'RAM',
  'ST',
  'LDM',
  'RDM',
  'CAM',
  'LS',
  'RS',
  'LWB',
  'CB',
  'RWB',
  'LF',
  'RF',
  'GK',
];
