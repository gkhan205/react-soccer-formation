export interface FormationProps {
  formation: string;

  onPositionSelection(position: string): string;
}

export interface TeamContainerProps {
  formation: string;
  dimension: Dimension;

  onPlayerClicked(position: string): string;
}

interface Dimension {
  height: number;
  width: number;
}
