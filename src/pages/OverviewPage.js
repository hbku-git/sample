import React, {Fragment, useEffect} from "react";
import Stats from "../components/Stats";
import AllAboutInnovationBlock from "../blocks/AllAboutInnovationBlock";
import StatementsBlock from "../blocks/StatementsBlock";
import FundingBlock from "../blocks/FundingBlock";
import PortfolioBlock from "../blocks/PortfolioBlock";
import WorkshopBlock from "../blocks/WorkshopsBlock";
import PartnersBlock from "../blocks/PartnersBlock";
import {useSelector, useDispatch} from 'react-redux';
import {changeTitle, changeTitleSEO, generalSelector} from "../store/reducers/generalReducer";
import {useSSE} from "use-sse";

const OverviewPage  = () => {

    const generalSettings = useSelector(generalSelector);
    const {title} = generalSettings;
    const dispatch = useDispatch()


    useSSE(()=>{
        dispatch(changeTitle('Innovation at HBKU'))
        dispatch(changeTitleSEO('Innovation Center | Innovation at HBKU'))

        return Promise.resolve('Innovation Center | Innovation at HBKU')
    },[])
    useEffect(()=>{
        document.title = 'Innovation Center | Innovation at HBKU'

    },[])

    return (<Fragment>
        <AllAboutInnovationBlock/>
        <StatementsBlock/>
        <WorkshopBlock/>
        <FundingBlock/>
        <Stats/>
        <PortfolioBlock/>
        <PartnersBlock/>
        </Fragment>)
}

export default OverviewPage;
