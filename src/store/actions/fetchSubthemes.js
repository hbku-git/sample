import {API_ENDPOINTS, API_URL} from "../constants";
import {FETCH_SUBTHEMES_ERROR, FETCH_SUBTHEMES_LOADING, FETCH_SUBTHEMES_SUCCESS} from "../types/sub-themes";



const fetchSubthemes = ({
                         name='',
                        theme ='',
                     }) => async (dispatch, store) => {

    try {
        dispatch({
            type: FETCH_SUBTHEMES_LOADING,
        });
        const params = (new URLSearchParams({
             "area[]": theme
        })).toString();
        
        console.log('params',{params});

        const request = await fetch(
            API_URL + API_ENDPOINTS["subthemes"] + '?' + params
        );

        const data = await request.json();
        if(!(data instanceof Array)){
            throw new Error('DATA MISMATCH');
        }

        const updated = data.map(item=>{
            return{
                ...item,
                // eslint-disable-next-line no-undef
                name: $('<textarea />').html(item.name).text(),
                //themes: item.theme.map(it=>it.tid)
            }
        })
        console.log('received sub-themes', {data,updated});


        dispatch({
            type: FETCH_SUBTHEMES_SUCCESS,
            payload: {
                data:updated,
            }
        })

    } catch (e) {
        dispatch({
            type: FETCH_SUBTHEMES_ERROR,
        });
    }


}


export default fetchSubthemes;
