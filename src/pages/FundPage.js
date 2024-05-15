import React, {useEffect} from "react";

import FundingItems from "../data/funding-items";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {changeTitle, changeTitleSEO, generalSelector} from "../store/reducers/generalReducer";
import {useSSE} from "use-sse";

const FundPage = ({
                      funds = FundingItems
                  }) => {
    let params = useParams();
    const {id} = params;


    const generalSettings = useSelector(generalSelector);
    const {title} = generalSettings;
    const dispatch = useDispatch();


    let fund = funds.find(item => item.id === id);
    fund = fund ? fund : {
        content: '<div class="m-wrap "><h2 class="text-center">No Fund Found</h2></div>'
    };

    useSSE(() => {
        dispatch(changeTitle('Innovation Fund - ' + fund.title))
        dispatch(changeTitleSEO('Innovation Center | Fund | ' + fund.title))
        return Promise.resolve('Innovation Center | Fund | ' + fund.title);

    }, [fund]);

    useEffect(()=>{
        document.title = 'Innovation Center | Fund | ' + fund.title;
    },[fund])

    return (
        <div className={'warpper'}
             dangerouslySetInnerHTML={{__html: fund.content}}
        >
        </div>
    )
}

export default FundPage
