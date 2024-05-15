import React, {useEffect} from "react";

import FundingBlock from "../blocks/FundingBlock";
import {useDispatch, useSelector} from "react-redux";
import {changeTitle, changeTitleSEO, generalSelector} from "../store/reducers/generalReducer";
import {useSSE} from "use-sse";

const FundsPage = ()=>{

    const generalSettings = useSelector(generalSelector);
    const {title} = generalSettings;
    const dispatch = useDispatch()

    useSSE(()=>{
        dispatch(changeTitle('Innovation Center'))
        dispatch(changeTitleSEO('Innovation Center | Funds'))
        return Promise.resolve('Innovation Center - Funds');
    },[])


    useEffect(()=>{
        document.title = 'Innovation Center | Funds'
    },[])

    return(

        <FundingBlock />
    )
}

export default FundsPage;
