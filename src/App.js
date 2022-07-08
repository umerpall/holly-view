import './App.css';
import {useState} from 'react';
import logo from './images/logo.png'
import search from './images/search-icon.svg'

function App() {
  const [inputVal, setInputVal] = useState('');
  const [movieData, setMovieData] = useState({});
  const generate = async() => {
    await fetch(`http://www.omdbapi.com/?t=${inputVal}&plot=full&apikey=e3a2a323`)
      .then((response)=>response.json())
      .then((data)=>setMovieData(data))
  }
  return (
    <div>
      <div className='header'>
        <div className='logo'>
          <img src={logo} alt="Logo" />
        </div>
        <div className='search-bar'>
          <input type="text" onChange={(text)=>setInputVal(text.target.value)}/>
          <button className='search-btn' onClick={generate}>
            <img src={search} alt="Search Icon" />
          </button>
        </div>
      </div>
      <div className='top-wrapper'>
        <div className='meta-data'>
          <p className='year-released'><span>Year Released:</span> <br/>{movieData.Year}</p>
          <p className='rated'><span>Rated:</span> <br/>{movieData.Rated}</p>
          <p className='running-time'><span>Running Time:</span> <br/>{movieData.Runtime}</p>
        </div>
        <div className='meta-data'>
          <p className='imdb-rating'><span>IMDB Rating:</span> <br/>{movieData.imdbRating}/10</p>
          <p className='movie-type'><span>Type:</span> <br/>{movieData.Type}</p>
          <p className='language'><span>Language:</span> <br/>{movieData.Language}</p>
        </div>
      </div>
      <div className='wrapper'>
        <div className='poster'>
          <img src={movieData.Poster} alt="Poster" />
        </div>
        <div className='movie-data'>
          <div>
            <div className='movie-info'>
              <p className='title'>{movieData.Title}</p>
              <p className='genre'>{movieData.Genre}</p>
              <p className='plot'>{movieData.Plot}</p>
            </div>
            <div className='production-team'>
              <p><span>Director: </span>{movieData.Director}</p>
              <p><span>Writer: </span>{movieData.Writer}</p>
              <p><span>Starring: </span>{movieData.Actors}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
