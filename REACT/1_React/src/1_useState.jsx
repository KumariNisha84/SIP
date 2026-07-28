import React, { useState } from 'react'

const App = () => {
  let [x, setX] = useState(0);
  let cnt = 0;
  console.log("Hello");
  function cntHandler() {
    // cnt++;
    // console.log(cnt);
    setX(x+1);
  }

  return (
    <div>
      Hello cnt: {x}
      {/* <button onClick={cntHandler}>increase</button> */}
      <button onClick={() => setX(x+1)}>Increase</button>

    </div>
  )
}

export default App;