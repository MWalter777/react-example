import { useState, useEffect } from "react";
import instance from '../const/axios';
import STATUS from '../const/status';
import Wrapper from '../styles/Row.styled';

const base_url = 'https://image.tmdb.org/t/p/original/';

const fetchData = async (request) =>{
    const requestData = await instance.get(request);
    return requestData;
}

const Row = ({title, request, isLarge}) =>{
    const [movies, setMovies] = useState([]);
    // a snippet of code which runs based on specific condition/variable

    useEffect(() => {
        // effect wherever we need to make
        fetchData(request).then((results) =>{
            if (results.status === STATUS.ok){
                setMovies(results.data.results);
            }
        });
        return () => {
            // when we clean effect
            console.log("Cleaning row");
        }
    }, [request]) // if [], run once when the Rows load and don't run again 

    console.log(movies);

    return (
        <Wrapper>
            <h2>{title}</h2>
            <div className="row-poster">
                {/* for each movie */}
                {
                    movies.map((movie)=>
                        <div key={movie.id} className="item-row">
                            <img className={`images ${isLarge? '': 'images-large'}`} src={`${base_url}${isLarge? movie.poster_path: movie.backdrop_path}`} alt={movie.name} />
                        </div>
                    )
                }
            </div>
        </Wrapper>
    );
}

export default Row;



