import React from "react";
import { Cardx } from "../Pages/Card.js";
import Card from "./card.jsx";

const cardBody = () => {
  return (
    <div>
      {Cardx.map((item) => {
        return <Card item={item} />;
      })}
    </div>
  );
};

export default cardBody;
