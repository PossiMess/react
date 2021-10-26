import React from "react";

function Fruits({name}) {
  return (
    <div>I Like {name}.</div>
  )
}

function App() {
  return (
    <div>Hello!!
      <Fruits name="apple"/>
      <Fruits name="banana"/>
      <Fruits name="pear"/>
      <Fruits name="melon"/>

    </div>

  );
}

export default App;
