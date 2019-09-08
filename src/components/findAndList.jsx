import React, { Component } from 'react';
import $ from 'jquery'

class MoviesFindAndList extends Component {
    state = {
        search: "",
        fetchedMovies: [],
        firstLoad: true,
    }

    handleInput = (input) => {
        if(input.key === "Enter") {
            this.doSearch(input.target.value)
        }
    }

    doSearch(searchValue){
        let urlSearchMovie;
        console.log(searchValue)
        if(searchValue === undefined){
            urlSearchMovie = "https://api.themoviedb.org/3/movie/popular?api_key=2ada8fe7c545ac2785e87a6a8e02f5e2&language=pt-BR&page=1"
        } else{
        if(isNaN(searchValue)){
            urlSearchMovie = "https://api.themoviedb.org/3/search/multi?api_key=2ada8fe7c545ac2785e87a6a8e02f5e2&language=pt-BR&query="+searchValue+"&include_adult=false"
        }
        else{
            urlSearchMovie = "https://api.themoviedb.org/3/discover/movie?api_key=2ada8fe7c545ac2785e87a6a8e02f5e2&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year="+searchValue
        }}
        $.ajax({
            url: urlSearchMovie,
            success: (movieResults) => {
                this.setState({fetchedMovies: movieResults.results})
            },
            error: (xhr, status, err) => {
                console.error("Failed to Fetch Movies.")
            }        
        })
    }

    listMovies(){
        let { fetchedMovies } = this.state;
        let movesArray = [];
        fetchedMovies.forEach((movie) => {
            movesArray.push(
                <table key={movie.id} className="moviesTable">
                    <tbody>
                        <tr>
                            <td className="moviesLeftSide">
                                <img alt="Img" src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2"+movie.poster_path}/>
                            </td>
                            <td className="moviesRightSide">
                                <div className="movieTitle" >{movie.title}</div>
                                {/* <div className="movieRate">{}</div> */}
                                <div className="movieDescription">
                                    <p>{movie.release_date}</p>
                                    <p>{movie.overview}</p>
                                    {/* <input type="button" onClick={this.viewMovie} value="View"/> */}
                                </div>

                            </td>
                        </tr>
                    </tbody>
                </table>         
            )
        });
        return movesArray;
    }
    
    componentDidMount(){
        this.doSearch();
    }    
    
    render() {
        return <React.Fragment>
                    <div className="searchField">
                        <input className="searchInput" type="text" name="search" placeholder="Busque um filme por nome ou ano" onKeyDown={this.handleInput} value={this.state.text}/>
                    </div>
                    <div className="movieList">
                        {this.listMovies()}
                    </div>
                </React.Fragment>
    }
}
 
export default MoviesFindAndList;