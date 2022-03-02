import React from "react";
import day from "dayjs";

export const App = () => {
  const now = day(new Date()).format();

  return (
    <div>
      <h1>Welcome React</h1>
      <h2>{now}</h2>
    </div>
  );
};
