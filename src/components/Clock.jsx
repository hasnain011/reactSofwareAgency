import React, {useState, useEffect} from 'react'



const Clock = () => {
 
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if(counter < 50){
      setCounter( counter => counter + 1);
    }
    }, 20);

    return () => {
      clearTimeout(timeout);
    };
  },[counter]);
  



  



  return (
    <div>
   {counter}

    </div>
  )
}

export default Clock
