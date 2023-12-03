// import {Component} from "react";

function MovieCard(props) {
  

   
     
        const {movies,addStars,decStars,handleFav,handlecrt} = props;
         const {title,plot,price,rating,stars,fav ,crt} = props.movies;
         return (
            <div className="main">
                <div className="movie-card">
                   <div className="left">
                    <img alt="poster" src="https://img.freepik.com/free-vector/male-superhero-set_23-2147921066.jpg?size=626&ext=jpg&ga=GA1.1.173674063.1693825877&semt=ais"></img>
                   </div>
                   <div className="right">
                    <div className="title">{title} </div>
                    <div className="plot">{plot} </div>
                    <div className="price">Rs. {price}</div>
                    <div className="footer">
                    <div className="rating">{rating} </div>
                    <div className="star-dis">
                    
                    <img alt="minus-btn" src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"  onClick= {() => {decStars(movies)}} className="str-btn"/>
                     <img alt="star img " src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"   className="stars"/>
                     <img alt="plus-btn" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" onClick= {() => {addStars(movies)}} className="str-btn" />
                       <span className="starCount">{stars}</span>
                    </div>

                    {fav?  <button className="favourite-btn"  onClick= {() => {handleFav(movies)}}>Un-Favourite</button>: <button className="unfavourite-btn" onClick= {() => {handleFav(movies)}}>Favourite</button>}

                    {crt?  <button className="removecart-btn" onClick= {() => {handlecrt(movies)}}>Remove To cart</button>:<button className="cart-btn"  onClick= {() => {handlecrt(movies)}}>Add To cart</button> }
                   
                    </div>
                   </div>
                </div>
            </div>
         )
     }


export default MovieCard;