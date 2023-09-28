import React, { useState, useEffect } from 'react';
import './Movies.css';
import MovieList from './MovieList';
import AddFavourites from './AddToFavourites';
import SearchBox from './SearchBox';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [favourites, setFavourites] = useState([]);

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;
        
        try {
            const response = await fetch(url);
            const responseJson = await response.json();

            if (responseJson.Search) {
                setMovies(responseJson.Search);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
	};

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);

    return (
        <div>
            <div className='searchBox-container'>
                <h2 className='movie-title'>Movies</h2>
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
            <div className='movie-list-container'>
                <div className='movie-list-section'>
                    <MovieList movies={movies} favouriteComponent={AddFavourites} handleFavouritesClick={addFavouriteMovie}/>
                </div>
                <div className='row'>
                    <MovieList movies={favourites} favouriteComponent={AddFavourites} />
                </div>
            </div>
        </div>
        
    );
};

export default Movies;
