import { loader, loaderContainer } from './loader.styles';
import React from 'react';

interface LoaderProps {
  label?: string | React.ReactNode;
}

export default function Loader({ label }: Readonly<LoaderProps>) {
  return (
    <div className={loaderContainer}>
      <span className={`${loader} loader`}>
        <span className="loader__inset"></span>
      </span>
      <div>{label}</div>
    </div>
  );
}
