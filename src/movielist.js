import {Component} from "react";
import MovieCard from "./moviecard";

class Movielist extends Component{
    
    render(){
        // const {title,plot,price,rating,stars,fav ,crt} = this.state .movies;
       const {movies, addStars,decStars,handleFav,handlecrt,} = this.props;
        return(
            <>
             {movies.map((movie)  => <MovieCard movies={movie} 
                                    addStars = {addStars}
                                    decStars =  {decStars}
                                    handleFav = {handleFav}
                                    handlecrt ={handlecrt}
                                    key={movie.id}
             
             
             />)}
           
            </>
        )
    }
}

export default Movielist;