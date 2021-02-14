// v3 auth api key =  9e7f4bc908f73460c45bb162672073cf
// https://api.themoviedb.org/3/movie/550?api_key=9e7f4bc908f73460c45bb162672073cf

// token v4 = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTdmNGJjOTA4ZjczNDYwYzQ1YmIxNjI2NzIwNzNjZiIsInN1YiI6IjYwMjg5NDFlMTk0MTg2MDAzZjhkZDdlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ydZsny-H5qW5VvMQhsEwC2yx9auCaeXaqPXh6aLPyIc
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Movie from './components/Movie';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie" exact component={Movie} />
      </Switch>
    </Router>
  );
}

export default App;
