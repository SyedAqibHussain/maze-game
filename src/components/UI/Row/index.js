import * as React from 'react';

import Cell from '../Cell';
import './style.css';

interface RowProps {
  length?: number;
  index: number;
}

export default function Row({ length = 5, index: hIndex }: RowProps) {
  const cells = [];

  for (let index = 0; index < length; index++) {
    cells.push(<Cell key={index} hIndex={hIndex} wIndex={index} />)
  }

  return (<div className="column">{cells}</div>);
}
