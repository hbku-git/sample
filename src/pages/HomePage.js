import React, {useEffect} from "react";
import HeroBannerBlock from "../blocks/HeroBannerBlock";
import IntroBlock from "../blocks/IntroBlock";
import ThemesBlock from "../blocks/ThemesBlock";
import QuoteBlock from "../blocks/QuoteBlock";
import TestimonialsBlock from "../blocks/TestimonialsBlock";
import TestimonialsBlockv2 from "../blocks/TestimonialsBlockv2";
import PartnersBlock from "../blocks/PartnersBlock";
import ProjectsBlock from "../blocks/ProjectsBlock";
import HeroBannerV2Block from "../blocks/HeroBannerV2Block";
import {useSearchParams} from "react-router-dom";
import ThemesSliderBlock from "../blocks/ThemesSliderBlock";
import {useDispatch} from "react-redux";
import fetchRandomBios from "../store/actions/fetchRandomBios";
import fetchThemes from "../store/actions/fetchThemes";


const HomePage = () => {

    const [searchParams] = useSearchParams();
    const mode = searchParams.get('mode')
    console.log({searchParams,mode});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRandomBios());
        dispatch(fetchThemes());
    }, []);

    return (
        <>
            {mode === '2' ? <HeroBannerBlock/> :<HeroBannerV2Block />   }
            <IntroBlock/>
            <ThemesSliderBlock/>
            <QuoteBlock/>
            <TestimonialsBlock />
            {/* <TestimonialsBlockv2 /> */}
            <PartnersBlock />
            <ProjectsBlock />
        </>
    );
}

export default HomePage;
