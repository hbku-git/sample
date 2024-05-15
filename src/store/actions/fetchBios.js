import {API_ENDPOINTS, API_URL} from "../constants";
import {FETCH_BIOS_ERROR, FETCH_BIOS_LOADING, FETCH_BIOS_SUCCESS} from "../types/bios";


const fetchBios = ({
                       subthemes = [],
                       theme = '',
                       name = '',
                       page = 0,
                       colleges = []
                   }) => async (dispatch, store) => {
    // debugger;
    try {
        dispatch({
            type: FETCH_BIOS_LOADING,
            payload: {
                page
            }
        });

        const params = new URLSearchParams({
            page
        });

        if (name) {
            params.append('name', name)
            params.append('title', name)
        }
        if (subthemes.length) {
            subthemes.forEach(item => {
                params.append('field_ic_subthemes_tid[]', item)
            })
        } else if (theme) {
            params.append('field_innovation_theme_tid[]', theme)
        }

        if(colleges){
            colleges.forEach(item => {
                params.append('colleges[]', item)
            })
        }

        const request = await fetch(
            API_URL + API_ENDPOINTS["bios"] + '?' + params
        );

        const data = await request.json();
        console.log('received bios', {data});
        if (!(data instanceof Array)) {
            throw new Error('DATA MISMATCH');
        }

        dispatch({
            type: FETCH_BIOS_SUCCESS,
            payload: {
                data,
                page
            }
        })

    } catch (e) {
        dispatch({
            type: FETCH_BIOS_ERROR,
        });
    }


}


export default fetchBios;
