import * as React from "react";
import SearchBar from "../components/SearchBar";
import "../styles/App.scss";

class App extends React.Component {
  public render() {
    return (
      <div>
        <h1>Cine project</h1>
        <SearchBar/>
      </div>
    );
  }
}

export default App;
