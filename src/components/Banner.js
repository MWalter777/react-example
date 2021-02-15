import { useEffect, useState } from "react";
import instance from '../const/axios';
import STATUS from '../const/status';
import request from '../const/requests';
import Wrapper from "../styles/Banner.styled";

const base_url = 'https://image.tmdb.org/t/p/original/';

const truncate = (str, n) =>{
    return str?.length > n ? str?.substr(0, n-1) + '...': str;
}

const fetchData = async (request) =>{
    const requestData = await instance.get(request);
    return requestData;
}

const Banner = ()=>{
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        //action
        fetchData(request.fetchNetflixOriginal).then((results) =>{
            if (results.status === STATUS.ok){
                let index = Math.random()*results.data.results.length - 1;
                let value = results.data.results[Math.floor(index)];
                setMovie(value);
            }
        });
    }, [])


    return (
        <Wrapper>
            <div className="banner-content">
                <h1 className="banner-tittle">{movie?.name || movie?.title || movie?.original_name}</h1>
                <div className="banner-button">
                    <button>Play</button>
                    <button>MyList</button>
                </div>
                <h4 className="banner-description">
                    {truncate(movie.overview, 150)}
                </h4>
                <div className="bottom-faded">
                </div>
                <div className="banner-img">
                    <img src={`${base_url}${movie.backdrop_path}`} alt={movie.name} />
                </div>
            </div>
        </Wrapper>
    );
}


export default Banner;