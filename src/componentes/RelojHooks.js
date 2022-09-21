import React, { useEffect, useState } from "react";

function Reloj({ hora }) {
  return <h3> Hora </h3>;
}

const RelojHooks = () => {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  const iniciar = () => {};
  const detener = () => {};
  return (
    <>
      <h2>Reloj con Hooks </h2>
      {visible && <Reloj hora={hora} />}
      <button onClick={iniciar}>iniciar</button>
      <button onClick={detener}>detener</button>
    </>
  );
};
export default RelojHooks;
