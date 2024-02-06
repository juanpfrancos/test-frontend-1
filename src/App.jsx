import React, { useState } from 'react'

import Encript from './Encript';
import Fibo from './Fibo';
import Almacen from './Almacen';

function App() {
  const [componente, setComponente] = useState(null);

  const handleEncript = () => {
    setComponente(<Encript />);
  };

  const handleFibo = () => {
    setComponente(<Fibo />);
  };

  const handleAlmacen = () => {
    setComponente(<Almacen />);
  };

  return (
    <div>
      <button onClick={handleEncript}>Ejercicio Encriptar</button>
      <button onClick={handleFibo}>Ejercicio Fibonacci</button>
      <button onClick={handleAlmacen}>Ejercicio Almacen</button>
      {componente}
    </div>
  );
}

export default App;
