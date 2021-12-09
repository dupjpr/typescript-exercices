import { useState } from 'react';
import './App.css';
import CustomButton from './componentes/customButton/CustomButton';

function App() {

  const [num, setNum] = useState<number>(0);

  function handleClick(e: MouseEvent, numero:number) {
    setNum(num + numero)
  };
  
  function handleClickRest(e: MouseEvent, numero:number) {
    setNum(num - numero)
  };
  return (
    <div className="App">
      {num}
      <CustomButton
        title='sumar'
        onClick={(e: MouseEvent, numero: number = 3) => handleClick(e, numero)}
      />
      <CustomButton
        title='restar'
        onClick={(e: MouseEvent, numero: number = 1) => handleClickRest(e, numero)}
      />
    </div>
  );
}

export default App;
