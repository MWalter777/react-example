import Row from "./Row";
import request from '../const/requests';
import Banner from "./Banner";
import Wrapper from "../styles/Home.styled";

const Home = () =>{
    return (
        <Wrapper>
            <div className="home">
                <Banner />
                <div className="rows">
                    <Row title="NETFLIX ORIGINAL" isLarge={true} request={request.fetchNetflixOriginal} />
                    <Row title="Trending now" request={request.fetchTrending}/>
                    <Row title="Top Rated" request={request.fetchTopRated} />
                    <Row title="Actions" request={request.fetchActionsMovies} />
                    <Row title="Comedy" request={request.fetchComedyMovies} />
                    <Row title="Documentary" request={request.fetchDocumentaryMovies} />
                    <Row title="Horror" request={request.fetchHorrorMovie} />
                    <Row title="Romance" request={request.fetchRomanceMovies} />
                </div>
            </div>
        </Wrapper>
    );
}

export default Home;
