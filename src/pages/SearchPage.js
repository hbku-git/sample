import {useSearchParams} from "react-router-dom";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import fetchThemes from "../store/actions/fetchThemes";
import ThemesBlock from "../blocks/ThemesBlock";
import BiographiesBlock from "../blocks/BiographiesBlock";
import fetchBios from "../store/actions/fetchBios";
import BiosSelector from "../store/selectors/bios";
import ThemesSelector from "../store/selectors/themes";

const SearchPage = () =>{
    //

    const [searchParams] = useSearchParams();
    const mode = searchParams.get('mode')
    console.log({searchParams,mode});

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchThemes());
    },[])

    const subAreas = searchParams.getAll('sub-areas');
    const area = searchParams.get('area');
    const name = searchParams.get('name');
    const themes = useSelector(ThemesSelector);

    useEffect(()=>{
        search();
    },[subAreas])

    const search = (page = 0) =>{
        let colleges = [];
        console.log('THEEEE', {themes});
        if(area && themes.list){
            const t = themes.list.find(item=>item.tid === area)
            if(t){
                colleges = t.colleges;
                console.log('find in colleges',{colleges})
            }
        }
        dispatch(fetchBios(
            {
                subthemes: subAreas,
                theme: area,
                page,
                colleges,
                name,
            }
        ))
    }

    return (
        <>
            <ThemesBlock />
            <BiographiesBlock onLoadMore={p=>search(p)} />

        </>
    );





}

export default SearchPage;
