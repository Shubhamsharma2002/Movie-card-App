import MovieList from "./movielist";
import Navbar from "./navbar";
import {movies} from "./moviedata"
import React from "react";

export default class App extends React.Component{
  constructor(){
    super();
    //Creating the state object 
    this.state = {
        movies : movies,
        cartCount: 0
    } 
  }

  addStars = (movie)=>{
  const {movies} = this.state;
  const movieId = movies.indexOf(movie);

  if(movies[movieId].stars <5){
      movies[movieId].stars += 0.5
  }

  this.setState({
      movies
  });
  }

  decStars = (movie)=>{
  const {movies} = this.state;
  const movieId = movies.indexOf(movie);

  if(movies[movieId].stars > 0){
      movies[movieId].stars -= 0.5;
  }

  this.setState({
      movies
  })

  }

  handleFav = (movie)=> {
  const {movies} = this.state;
  const movieId = movies.indexOf(movie);

  movies[movieId].fav = !movies[movieId].fav;

  this.setState({
      movies
  })
  }

  handlecrt = (movie)=> {
  let {movies,cartCount} = this.state;
  const movieId = movies.indexOf(movie);
  
console.log(movies[movieId]);

  movies[movieId].crt = !movies[movieId].crt;
     console.log(movies[movieId].crt);

  if(movies[movieId].crt){
    cartCount = cartCount + 1;
  }else{
    cartCount -= 1;

  }
  this.setState({
      movies,
      cartCount
  })
  console.log(cartCount);
  }

  render(){
    const {movies, cartCount} = this.state;
    return(
      <>
      <Navbar  cartCount = {cartCount}/>
      <MovieList movies ={movies}
                 addStars = {this.addStars}
                 decStars = {this.decStars}
                 handleFav = {this.handleFav}
                 handlecrt = {this.handlecrt}/>
      </>

    )
  }
}