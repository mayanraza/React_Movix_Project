import React from 'react';
import "./style.scss";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../components/hooks/useFetch';
import { useSelector } from 'react-redux';

import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';



const HeroBanner = () => {

    const [background, setBackground] = useState("");
    const [query, setquery] = useState("");
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home);

    const { data, loading } = useFetch("/movie/upcoming");






    useEffect(() => {

        const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;

        setBackground(bg)
    }, [data])







    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`)
        }
    }


    return (


        <div className="heroBanner">

            {!loading && <div className="backdrop-img">
                <Img src={background} />
            </div>}







            <div className="opacity-layer">

            </div>







            <ContentWrapper>

                <div className="heroBannerContent">

                    <span className="title">Welcome</span>
                    <span className="subTitle">Discover, Stream, and Enjoy a Diverse Selection of Movies on Our Platform.</span>


                    <div className="searchInput">
                        <input
                            onChange={(e) => setquery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                            type="text"
                            placeholder='Search for a Movie or Tv show....' />

                        <button>Search</button>
                    </div>

                </div>

            </ContentWrapper>









        </div>

    )
}

export default HeroBanner