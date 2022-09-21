import React, { useEffect, useState } from "react";

const ScrollHoohks = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    return () => {
      //esto se usa para la fase de desmontaje
    };
  }, [scrollY]);

  useEffect(() => {
    console.log("Fase de Montaje");
  }, []);

  return (
    <div>
      <h1>asdasdasd</h1>
    </div>
  );
};

export default ScrollHoohks;
