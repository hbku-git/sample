import {API_ENDPOINTS, API_URL} from "../constants";
import {FETCH_BIOS_ERROR, FETCH_BIOS_LOADING, FETCH_BIOS_SUCCESS} from "../types/bios";
import {FETCH_RANDOM_BIOS_ERROR, FETCH_RANDOM_BIOS_LOADING, FETCH_RANDOM_BIOS_SUCCESS} from "../types/random-bios";


const fetchBios = () => async (dispatch, store) => {

    try {
        dispatch({
            type: FETCH_RANDOM_BIOS_LOADING,
        });


        const request = await fetch(
            API_URL + API_ENDPOINTS["randomBios"] + '?' + Date.now()
        );

        const data = await request.json();
        console.log('received bios', {data});
        if (!(data instanceof Array)) {
            throw new Error('DATA MISMATCH');
        }

        dispatch({
            type: FETCH_RANDOM_BIOS_SUCCESS,
            payload: {
                data,
            }
        })

    } catch (e) {
        dispatch({
            type: FETCH_RANDOM_BIOS_ERROR,
        });
    }


}


export default fetchBios;
