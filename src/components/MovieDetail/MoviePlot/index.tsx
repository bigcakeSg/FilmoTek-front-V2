import { plotStyles } from './moviePlot.styles';

interface MoviePlotProps {
  plot: string;
}

export default function MoviePlot({ plot }: Readonly<MoviePlotProps>) {
  return <div className={plotStyles}>{plot}</div>;
}
