import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ThemesSelector from "../store/selectors/themes";
import fetchThemes from "../store/actions/fetchThemes";
import SubthemesSelector from "../store/selectors/sub-themes";
import fetchSubthemes from "../store/actions/fetchSubthemes";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import fetchBios from "../store/actions/fetchBios";
import BiographiesBlock from "../blocks/BiographiesBlock";
import Biography from "./Biography";
import BiosSelector from "../store/selectors/bios";


const Filters = () => {
    const dispatch = useDispatch();
    const themesSlice = useSelector(ThemesSelector);
    const bioSlice = useSelector(BiosSelector);
    const subthemesSlice = useSelector(SubthemesSelector);
    const [selection, setSelection] = useState(null);
    const [subthemeSelection, setSubthemeSelection] = useState([]);

    const subthemesSelect = useRef(null);


    console.log('themes', {themesSlice});
    useEffect(() => {
        dispatch(fetchThemes({name: ''}));
        dispatch(fetchSubthemes({name: ''}));
        dispatch(fetchBios({}));
        return () => {

        };
    }, []);

    useEffect(() => {
        search();
    }, [selection])

    useEffect(() => {
        search();
    }, [subthemeSelection])


    const onItemSelected = (e) => {
        console.log('theme changed', {e});
        setSelection(e);
        console.log('item', {item: subthemesSelect.current});
        subthemesSelect.current.setValue([]);
        if (!e) {
            return;
        }
        dispatch(fetchSubthemes({
            theme: e.value
        }));

    }

    const filter = () => {
        if (!selection.length) return;

    }

    const animatedComponents = makeAnimated();


    const search = (page = 0 ) => {

        const subthemes = subthemesSelect.current.getValue().map(item => item.value);
        const theme = selection? selection.value : '';
        let colleges = [];
        if(theme){
            const t = themesSlice.find(item=>item.tid === theme)
            if(t){
                colleges = t.colleges;
            }
        }
        console.log('bio search', {theme, subthemes,colleges});
        dispatch(fetchBios({subthemes, theme,page,colleges}))
    }

    return (
        <>
            <section className="m-wrap p-t-0 animatedParent ">
                <div className="container">
                    <div className="row">
                        <form className={'d-flex justify-content-between p-xl-5 p-sm-2 align-items-end flex-wrap'}
                              style={{
                                  zIndex: 100
                              }}>
                            <div className={'p-2 animated fadeIn w-100'}>
                                <label>Select a main theme:</label>
                                <Select
                                    components={animatedComponents}
                                    onChange={onItemSelected}
                                    isClearable

                                    name="theme" id="theme" options={themesSlice.list.map(item => {
                                    return {
                                        value: item.tid,
                                        label: item.name
                                    }
                                })}/>

                            </div>
                            <div
                                className={'p-2 w-100'}
                                style={{
                                    display: selection ? 'block' : 'none',
                                    flexGrow: 1
                                }}>
                                <label>Select a Sub-theme:</label>
                                {<Select
                                    ref={subthemesSelect}
                                    components={animatedComponents}
                                    closeMenuOnSelect={false}
                                    isMulti
                                    onChange={setSubthemeSelection}
                                    isLoading={subthemesSlice.loading}
                                    disabled={subthemesSlice.loading}
                                    name="theme" id="theme" options={subthemesSlice.list.map(item => {
                                    return {
                                        value: item.tid,
                                        label: item.name
                                    }
                                })}/>}
                            </div>
                            <div className={'p-2 w-100'} style={{
                                flexGrow: 2
                            }}>
                                <div className={'btn btn-primary text-center '} style={{
                                    display: selection ? 'block' : 'none',

                                }} onClick={search}>
                                    Search
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </section>


            <BiographiesBlock/>
            <div className={'ic-loader '} style={{
                display: bioSlice.loading ? 'block' : 'none',

            }}>
            </div>
            <div className={'btn btn-primary text-center '} style={{
                display: bioSlice.canLoadMore ? 'block' : 'none',

            }} onClick={() => {
                if(bioSlice.loading) return;
                search(bioSlice.page + 1);
            }}>
                Load More
            </div>

            <div className={'text-bold text-center p-2'} style={{
                display: bioSlice.canLoadMore ? 'none' : 'block',

            }} >
                No More Profiles
            </div>
        </>
    );
}

export default Filters;
