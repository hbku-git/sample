import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ThemesSelector from "../store/selectors/themes";
import {useNavigate, useSearchParams} from "react-router-dom";
import fetchSubthemes from "../store/actions/fetchSubthemes";
import SubthemesSelector from "../store/selectors/sub-themes";
import SubAreas from "../components/SubAreas";
import Select from "react-select";
import {DebounceInput} from "react-debounce-input";

const ThemesBlock = () => {
    const themes = (useSelector(ThemesSelector)).list;
    const subthemes = (useSelector(SubthemesSelector)).list;
    const subthemesLoading = (useSelector(SubthemesSelector)).loading;
    console.log('themes', {themes, subthemes});
    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();
    const area = searchParams.get('area')
    const mode = searchParams.get('mode')
    const subAreas = searchParams.getAll('sub-areas')
    const selectedName = searchParams.get('name')
    console.log({searchParams, area});

    const [subFilter, setSubfilter] = useState("");
    const [name, setName] = useState(selectedName);
    const [selectedSubarea, setSelectedSubArea] = useState(null);
    const [subAreaRemoved, setSubAreaRemoved] = useState(false);

    const isActive = (tid) => {
        return area === tid
    }

    const navigation = useNavigate();


    useEffect(() => {
        dispatch(fetchSubthemes({theme: area}));
        console.log('law',document.getElementById('sub-areas').offsetTop);
      //  document.getElementById('sub-areas').offsetTop
        /*window.scrollTo({
            behavior:'smooth',
            top:        document.getElementById('sub-areas').offsetTop + 250
        })*/
    }, [area])



    const navigate = (tid) => {
        const modeQuery = +mode ? 'mode=' + mode : '';

        const params = new URLSearchParams({})
        if(mode){
            params.append('mode', mode);
        }
        if(name ){
            params.append('name', name);
        }
        if(tid){
            params.append('area', tid);
        }
        navigation('?'+params.toString());
    }

    const updateSubarea = (tid,isRemove=false,)=>{
        setSelectedSubArea(tid);
        setSubAreaRemoved(isRemove);
    }

    const navigateSubtheme = (tid,isRemove=false,selectedName="")=>{
        console.log('on subtheme change',{tid,isRemove,selectedName,name});
        const params = new URLSearchParams({})

        if(area){
            params.append('area',area)
        }
        if(mode && mode!='null'){
            params.append('mode',mode)
        }
        if (name){
            console.log('we have a name:', {name, selectedName});
            params.append('name',name)
        }


        if(tid){
            params.append('sub-areas',tid)
        }
        console.log('params',{params: params.toString()})
        navigation('?'+params.toString())
    }

    const onFilterChange = (e) => {
            setName(e.target.value);
    }

    const onSubthemeChanged = (tid)=>{
        setSelectedSubArea(tid);
    }


    useEffect(()=>{
        console.log('something changed');
        navigateSubtheme(selectedSubarea,subAreaRemoved,name?name:selectedName)
    },[selectedSubarea,name,subAreaRemoved])

    const areasFiltered = subFilter ? [...subthemes].filter(item => item.name.toLowerCase().includes(subFilter.toLowerCase().trim())) : subthemes;

    console.log({areasFiltered})

    const activeArea = themes.find(item => {
        return item.tid === area
    });

    let currMode = "all areas";

    if(activeArea){
        currMode = "Selected Expertise Area"
    }

    if(selectedSubarea){
        currMode = "Selected Expertise Sub-Area"
    }

    return (
        <section className="inner-banner filterinner-banner" id={'filters-header'}>
            <div className="group-header">
                <div className="mez spotlight spotlight-md"
                     style={{
                         backgroundImage: activeArea ? `url('${activeArea.bgImg}')` :"url('images/smart-city.png')",
                         transition: 'background 1s',
                         willChange: 'background-image',
                         overflow: "visible"
                     }}>
                    <div className="spotlight__content">
                        <div className="container">
                            <div className="spotlight__title text-white full">
                                <h1>View our specialists from across various <br/> areas of expertise  </h1>
                                {mode === '2'? <div className="cat__subtheme p-t-2">
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={
                                            activeArea ? [{
                                                value: activeArea.tid,
                                                label: activeArea.name
                                            }] : null
                                        }


                                        isClearable={true}
                                        isSearchable={true}
                                        name="name"
                                        onChange={(item) => {
                                            if(!item){
                                                navigate(null);
                                                return;
                                            }
                                            navigate(item.value)
                                        }}
                                        options={themes.map(item => {
                                            return {
                                                value: item.tid,
                                                label: item.name
                                            }
                                        })}

                                    />
                                </div> : <div className="cat__subtheme p-t-2">
                                    <ul>
                                        {
                                            themes.map(item => (
                                                <li
                                                    className={
                                                    isActive(item.tid) ? 'active' : ''} key={item.tid}
                                                    onClick={e=>navigate(item.tid)}>{item.name}</li>)
                                            )
                                        }
                                    </ul>
                                </div>}

                                <div className="cat__subtheme cat__subtheme__item" style={!activeArea? {
                                    borderBottom:'unset'
                                } : null} id={'sub-areas'}>
                                    {activeArea ?
                                        <div className="searchsubtheme__item">
                                        <h4 className={'m-b-2'}>Select Focus Sub-Area of Expertise in {activeArea.name}</h4>
                                       {/* <form className="cat__searchbox" action="" method="get">
                                            <div className="searchbox">
                                                <input className="searchbox-input" type="text" value={subFilter}
                                                       onChange={onFilterChange}
                                                       placeholder="e.g. cybersecurity"/>
                                                <button type="submit" className="searchbox-submit" value=""><i
                                                    className="fa fa-search" aria-hidden="true"></i></button>
                                            </div>

                                        </form>*/}
                                        <SubAreas
                                            isLoading={subthemesLoading}
                                            onClickItem={onSubthemeChanged} subAreas={subthemes} filter={subFilter} selected={subAreas?subAreas:[]} />
                                    </div> : null }
                                </div>

                                <div className="cat__subtheme cat__subtheme__item" id={'names'}>
                                    <h4 className={'m-b-2'}>Search by name in {currMode}</h4>
                                    <div className="cat__searchbox" >
                                        <div style={{maxWidth:'100%',marginRight:0}} className="searchbox">
                                            <DebounceInput
                                                debounceTimeout={300}
                                                className="searchbox-input" type="text" value={name}
                                                onChange={onFilterChange}
                                                onKeyPress={e=>{
                                                    console.log(e);
                                                }}
                                                placeholder="Type a name"/>
                                            <button type="submit" className="searchbox-submit" value=""><i
                                                className="fa fa-search" aria-hidden="true"></i></button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
);
}

export default ThemesBlock
