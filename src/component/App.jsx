import Hero from "./component/Hero";
import { useState } from "react";
import Start from "./component/start";

function App() {
   const [currentvalue , changevalue] = useState(false);

    const display = () => {
      changevalue(!currentvalue)
    }
      
  return (
    <>
      { currentvalue ? <Start/> : <Hero change = {display} />}

    </>
  );
}

export default App;