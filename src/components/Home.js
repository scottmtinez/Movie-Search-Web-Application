import React, { useState, useEffect } from 'react';

function getMovies(){
    
}

function Home(){
    return (
        <div>
            <div className='main-container'>
                <div className='main-landscape-container'></div>
            </div>
        
            <h2>Featured Today</h2>
            <div className='movie-name-list'>
                <div className='featured-movie-item1'></div>
                <div className='featured-movie-item2'></div>
                <div className='featured-movie-item3'></div>
                <div className='featured-movie-item4'></div>
                <div className='featured-movie-item5'></div>
            </div>

            <h2>What To Watch</h2>
            <div className='what-to-watch-movie-list'>
                <div className='what-to-watch-movie-item1'></div>
                <div className='what-to-watch-movie-item2'></div>
                <div className='what-to-watch-movie-item3'></div>
                <div className='what-to-watch-movie-item4'></div>
                <div className='what-to-watch-movie-item5'></div>
            </div>

            <h2>In Theaters</h2>
            <div className='in-theaters-movie-list'>
                <div className='in-theaters-movie-item1'></div>
                <div className='in-theaters-movie-item2'></div>
                <div className='in-theaters-movie-item3'></div>
                <div className='in-theaters-movie-item4'></div>
                <div className='in-theaters-movie-item5'></div>
            </div>

        </div>
    );
}

export default Home;