import './App.css';
import Row from './Row'
import requests from './request';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar></Navbar>
      </header>
      <Banner fetchUrl={requests.fetchNetflixOriginals}></Banner>
      <Row title="Trending " fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated " fetchUrl={requests.fetchTopRated}></Row>
      <Row isLargeRow={true} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}></Row>
      <Row title="Action Movies " fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies " fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies " fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance movies " fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries " fetchUrl={requests.fetchDocumentaries}></Row>


    </div>
  );
}

export default App;
