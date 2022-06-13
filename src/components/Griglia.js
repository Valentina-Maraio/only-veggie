import React from "react";


const Griglia = () => {

  const ricette = [
    {
      id: 1,
      name: "Riso e patate",
    },
    {
      id: 2,
      name: "Fagiolini con patate",
    },
    {
      id: 3,
      name: "Riso al sugo di pomodoro",
    },
    {
        id: 4,
        name: "Pizza con salame piccante",
    },
  ];

  return (
    <div>
      <h1>Griglia</h1>
      {ricette.map((key, id) => {
        return (
          <div key={id}>
            <h3>{key.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Griglia;
