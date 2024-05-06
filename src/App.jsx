import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <main style={{background:color}} className="w-full h-screen flex justify-center items-end duration-500  ">
        <div className="bg-slate-300 px-6 py-3 rounded-lg flex flex-col justify-center items-center w-[300px] h-[100px] mb-6   ">
          <p className="text-black mb-4">Choose a color ?</p>
          <div className="flex gap-4">
            <button onClick={()=>setColor("red")} className="bg-red-600 px-4 py-2 rounded-full">Red</button>
            <button onClick={()=>setColor("blue")} className="bg-blue-500 px-4 py-2 rounded-full">Blue</button>
            <button onClick={()=>setColor("green")} className="bg-green-600 px-4 py-2 rounded-full">
              Green
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
