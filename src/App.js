import React from "react";
import propTypes from "prop-types";

function Fruits({name, flavour}) {
  return (
    <div>
      <p>I eat {name}.</p>
      <p>the flavour is {flavour}.</p>
    </div>
  )
}

Fruits.propTypes = {
  name: propTypes.string.isRequired,
  flavour: propTypes.string.isRequired
};

const FruitsIlike =[
  {
    id:1,
    name: "apple",
    flavour: "sweet"
  },
  {
    id:2,
    name: "banana",
    flavour: "sweet"
  },
  {
    id:3,
    name: "pear",
    flavour: "seek"
  },
  {
    id:4,
    name: "melon",
    flavour: "sweet"
  },
]
function fruitsRender(dish){
  return <Fruits key={dish.id}name={dish.name} flavour={dish.flavour} />
}
function App() {
  return (
    <div>
      {
      FruitsIlike.map(fruitsRender)
      }
    </div>

  );
}

export default App;
