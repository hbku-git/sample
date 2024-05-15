import React, {useEffect} from "react";
import MainBannerBlock from "../blocks/MainBannerBlock";
import {useDispatch, useSelector} from "react-redux";
import ThemesSelector from "../store/selectors/themes";
import {useParams} from "react-router-dom";
import ExpertsBlock from "../blocks/ExpertsBlock";
import fetchBios from "../store/actions/fetchBios";
import BiosSelector from "../store/selectors/bios";


const ThemePage = () => {

    const themes = useSelector(ThemesSelector);
    const bios = useSelector(BiosSelector);

    let params = useParams();
    const dispatch = useDispatch();
    const {id} = params;

    const theme = themes.list.find(item=>item.tid === id.toString())

    useEffect(()=>{
        dispatch(fetchBios({
            theme: id,
            colleges : theme.colleges
        }))
    },[id])

    const load = () =>{

        dispatch(fetchBios({
            theme: id,
            page: bios.page + 1,
            colleges : theme.colleges
        }));

    }

    return (<>
        <MainBannerBlock title={"Theme Focus : "+theme.name} />
        <ExpertsBlock />
        <div className={'container'}>
            <div className={'row justify-content-center'}>
                <div className={'col-6'}>
                    <div onClick={load} className={"btn btn-primary w-100 m-5"}>View More</div>
                </div>
            </div>
        </div>

    </>)
}

export default ThemePage;
