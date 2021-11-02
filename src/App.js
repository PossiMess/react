import React from "react";
import propTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie"

///function component
/*
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

*/
///class component
class App extends React.Component{
  state = {
    isLoading : true,
    movies: [],
  }
  getMovies = async () => {
    const {data : 
                {data :{
                          movies}
                        }} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating")
    this.setState({movies, isLoading:false})

  };

  componentDidMount(){
    this.getMovies();
  }
  render(){
    const{isLoading, movies} = this.state;
    return (
      <div>
        {isLoading? "Loading...":movies.map(movie=>{
          console.log(movie);
          return <Movie 
            key = {movie.id}
            id={movie.id}
            year={movie.year} 
            poster={movie.medium_cover_image} 
            summray={movie.summary} 
            title={movie.title} />
        })}
      </div>
      
    )
  }
}

export default App;
