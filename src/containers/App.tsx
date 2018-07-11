import axios from "axios";
import * as React from "react";
import SearchBar from "../components/SearchBar";
import VideoDetail from "../components/VideoDetail";
import VideoList from "../containers/VideoList";
import "../styles/App.scss";

const API_ENDPOINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";
// tslint:disable-next-line:no-var-requires
const API_KEY = require("./config.json").API_KEY;

interface IAppState {
  currentMovie: any;
  movieList: any;
}

class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentMovie: {},
      movieList: {}
    };
  }
  
  public componentWillMount() {
    this.initMovies();
  }

  public initMovies() {
    axios.get(`${API_ENDPOINT}${POPULAR_MOVIES_URL}&${API_KEY}`)
      .then((response) => {
        this.setState({
          currentMovie : response.data.results[0],
          movieList: response.data.results.slice(1, 6)
        });
        console.log(this.state.currentMovie, this.state.movieList);
    });
  }

  public render() {
    const renderMovieList = () => {
      if (this.state.movieList.length >= 5) {
        return <VideoList movieList={this.state.movieList} />;
      }
    };

    return (
      <div>
        <h1>Cine project</h1>
        <SearchBar/>
        {renderMovieList()}
        <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview}/>
      </div>
    );
  }
}

export default App;
