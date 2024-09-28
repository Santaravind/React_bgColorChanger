import { useState } from "react"


function App() {
  const [color,setColor]=useState("olive")

  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        <div className="flex gap-3 bg-white rounded-3xl py-4 px-3">
          <button onClick={()=>setColor("red")}
          className="outline-none bg-red-600 p-4 rounded-full font-semibold shadow-2xl text-2xl">Red</button>
          <button onClick={()=>setColor("green")}
           className="outline-none bg-green-600 p-4 rounded-full font-semibold shadow-2xl text-2xl">
            Green
          </button>
          <button onClick={()=>setColor("blue")}
          className="outline-none bg-blue-600 p-4 rounded-full font-semibold shadow-2xl text-2xl">Blue</button>
          <button onClick={()=>setColor("yellow")}
          className="outline-none bg-yellow-600 p-4 rounded-full font-semibold shadow-2xl text-2xl">Yellow</button>
          
          <button onClick={()=>setColor("gray")}
          className="outline-none bg-gray-600 p-4 rounded-full font-semibold shadow-2xl text-2xl">Gray</button>
          <button onClick={()=>setColor("pink")}
          className="outline-none bg-pink-600 p-4 rounded-full font-semibold shadow-2xl text-2xl">Pink</button>

          <button onClick={()=>setColor("purple")}
          className="outline-none bg-purple-600 p-4 rounded-full font-semibold shadow-2xl text-2xl">Purple</button>

          <button onClick={()=>setColor("white")}
          className="outline-none bg-white p-4 rounded-full font-semibold shadow-2xl text-2xl">White</button>

          <button onClick={()=>setColor("black")}
          className="outline-none bg-black text-white p-4 rounded-full font-semibold shadow-2xl text-2xl">Black</button>
        </div>

       </div>
    </div>
      
    </>
  )
}

export default App
