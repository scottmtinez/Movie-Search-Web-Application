import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;


/*
      <div className='main-container'>
        <div className='main-landscape-container'>
          main-landscape-container
        </div>
      </div>

      <h2>Featured Today</h2>
      <div className='movie-name-list'>
        <div className='featured-movie-item'>
          Movie #1
        </div>
        <div className='featured-movie-item'>
          Movie #2
        </div>
        <div className='featured-movie-item'>
          Movie #3
        </div>
        <div className='featured-movie-item'>
          Movie #4
        </div>
        <div className='featured-movie-item'>
          Movie #5
        </div>
      </div>

      <h2>What To Watch</h2>
      <div className='what-to-watch-movie-list'>
        <div className='what-to-watch-movie-item'>
          Movie #1
        </div>
        <div className='what-to-watch-movie-item'>
          Movie #2
        </div>
        <div className='what-to-watch-movie-item'>
          Movie #3
        </div>
        <div className='what-to-watch-movie-item'>
          Movie #4
        </div>
        <div className='what-to-watch-movie-item'>
          Movie #5
        </div>
      </div>

      <h2>In Theaters</h2>
      <div className='in-theaters-movie-list'>
        <div className='what-to-watch-movie-item'>
          Movie #1
        </div>
        <div className='in-theaters-movie-item'>
          Movie #2
        </div>
        <div className='in-theaters-movie-item'>
          Movie #3
        </div>
        <div className='in-theaters-movie-item'>
          Movie #4
        </div>
        <div className='in-theaters-movie-item'>
          Movie #5
        </div>
      </div>
*/