import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)
  const Callapi = async () => {

    await fetch('http://localhost:3000/increment')
    .catch((error)=>
    {
      console.log( error);
    })
  };
  const Callapi2 = async () => {
    await fetch('http://localhost:3000/value')
    .then(async(response)=>
    {
      const data = await response.json();
      setCount(data);
    })
    .catch((error)=>
    {
      console.log( error);
    })
  };

  return (
    <>
    <div className="bg-black h-screen flex flex-col items-center justify-center">
      <div className="mb-3">
        <button
          className="bg-white w-30 h-10 rounded-lg p-2 hover:bg-black hover:text-white hover:ring  hover:ring-white"
          onClick={Callapi}
        >
          Increment
        </button>
      </div>

      <div className="mb-3">
        <button
          className="bg-white w-30 h-10 rounded-lg p-2 hover:bg-black hover:text-white  hover:ring  hover:ring-white"
          onClick={Callapi2}
        >
          Get Current Value
        </button>
      </div>

      <p className="text-white inline mt-3">Current Value: {count}</p>
    </div>
      
    </>
  )
}

export default App
