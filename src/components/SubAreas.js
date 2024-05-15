import React, {useState} from "react";
import Select from "react-select";

const SUBTHEMES_PER_PAGE = 20;

const SubAreas = ({
                      isLoading,
                      filter, subAreas, selected, onClickItem
                  } = {
    filter: '', subAreas: [], selected: [], isLoading: false
}) => {

    console.log({filter, subAreas});

    const [page, setPage] = useState(1);

    const areasFiltered = (filter ? subAreas.filter(item => item.name.toLowerCase().includes(filter.toLowerCase().trim())) : subAreas).sort(item => {
        if (selected.length) {
            if (selected.includes(item.tid)) {
                return -1
            }
        }
        return 1
    });


    const isActive = (tid) => {
        return selected.includes(tid)
    }
    const onClick = (tid) => {
        onClickItem(tid, isActive(tid));
    }

    const activeElement = subAreas.find(item => isActive(item.tid))
    console.log({areasFiltered,selected,activeElement})


    if (isLoading) {
        return (
            <div>
                <img src={'images/load.gif'} className={'loading-item'}/>
                <div className={"loading"}></div>
            </div>
        )
    }


    return (
        <div>
            <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={
                activeElement ? [{
                    value: activeElement.tid,
                    label: activeElement.name
                }] : null
                }


                isLoading={isLoading}
                isClearable={true}
                isSearchable={true}
                name="name"
                onChange={(item) => {
                    onClickItem(item?item.value: null);
                }}
                options={subAreas.map(item => {
                    return {
                        value: item.tid,
                        label: item.name
                    }
                })}

            />
        </div>
    )


    /*return (
        <ul className="subtheme__cat">
            {areasFiltered.map(item => (<li onClick={e=>onClick(item.tid)}
                                            className={"d-inline-block " + (isActive(item.tid) ? 'active' : '')}
                                            key={item.tid}
            >{item.name}</li>)).slice(0, SUBTHEMES_PER_PAGE
 * page)

            }
            {areasFiltered.length > SUBTHEMES_PER_PAGE
 && areasFiltered.length > page * SUBTHEMES_PER_PAGE
 ? <li onClick={() => {
                if(areasFiltered.length <= page * SUBTHEMES_PER_PAGE
){
                    return;
                }
                setPage(page + 1);
            }} className="subtheme--loadmore">Show More</li> : null}
            {page > 1 ? <li onClick={() => {
                if (page === 1) return;
                setPage(page - 1);
            }} className="subtheme--loadmore">Show Less</li> : null}
        </ul>);*/
}


export default SubAreas;
