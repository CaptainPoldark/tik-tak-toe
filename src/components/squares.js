import React from 'react';

const Square = ({id, newState})=> {
  
  const palet = ['teal','white'];
  //const getRandomColor = () => palet[Math.floor(Math.random()*3)];
  const [status, setStatus] = React.useState(null); 
  const markers = ["O", "X"];

  /*React.useEffect(()=>{
    console.log(`Render ${id}`);
    return ()=> console.log(`unmounting Square ${id}`);
  });*/
  
  //keep track of state of the Square
  return (
    <button onClick={(e)=>{
      let nextPlayer = newState(id);
      setStatus(nextPlayer);
      e.target.disabled = true;
    }}>
      {markers[status]}
      </button>
  )
}

export default Square;