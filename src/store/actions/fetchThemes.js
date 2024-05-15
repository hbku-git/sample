import {API_ENDPOINTS, API_URL} from "../constants";
import {FETCH_THEMES_ERROR, FETCH_THEMES_LOADING, FETCH_THEMES_SUCCESS} from "../types/themes";


const fetchThemes = ({
                         name
                     } = {name:''}) => async (dispatch, store) => {

    try {
        dispatch({
            type: FETCH_THEMES_LOADING,
        });

        const request = await fetch(
            API_URL + API_ENDPOINTS["themes"] + (name ? '?name=' + name : '')
        );

        const data = await request.json();
        console.log('received themes', {data});
        if(!(data instanceof Array)){
            throw new Error('DATA MISMATCH');
        }

        dispatch({
            type: FETCH_THEMES_SUCCESS,
            payload: {
                data,
            }
        })

    } catch (e) {
        dispatch({
            type: FETCH_THEMES_ERROR,
        });
    }


}


export default fetchThemes;
