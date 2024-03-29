import React from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import { useState } from 'react'
import useFetch from '../../../components/hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'





const Trending = () => {

    const [endPoint, setEnfPoint] = useState("day")



    const { data, loading } = useFetch(`/trending/movie/${endPoint}`)


    const onTabChange = (tab) => {
        setEnfPoint(tab === "Day" ? "day" : "week")

    }




    return (


        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    )
}

export default Trending