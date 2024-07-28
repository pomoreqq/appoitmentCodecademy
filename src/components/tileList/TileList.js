import React from "react";
import {Tile} from '../tile/Tile'
export const TileList = ({items}) => {
  if (!Array.isArray(items)) {
    return null;
  }

  return (


    <div>
      {items.map((item, index) => {
        const { name, ...rest } = item;
        return <Tile key={index} name={name} description={rest} />;
      })}
    </div>
  );
};
