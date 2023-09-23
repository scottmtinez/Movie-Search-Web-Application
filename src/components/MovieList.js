import React from 'react';
import './MovieList.css';

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='movieList-container'>
					<img src={movie.Poster} alt='movie'></img>
					<div className='add-to-favorites'>
						Add to Favourites
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;