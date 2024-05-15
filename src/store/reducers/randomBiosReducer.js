import {FETCH_RANDOM_BIOS_ERROR, FETCH_RANDOM_BIOS_LOADING, FETCH_RANDOM_BIOS_SUCCESS} from "../types/random-bios";

const initialState = {
    list: [], loading: false, error: false,
}


export default (state = initialState, action) => {
    switch (action.type) {
        case  FETCH_RANDOM_BIOS_LOADING:
            return {
                ...state, loading: true, error: false,
            }

        case FETCH_RANDOM_BIOS_ERROR:
            return {
                ...state, loading: false, error: true,
            }

        case FETCH_RANDOM_BIOS_SUCCESS:
            const {data} = action.payload;

            const list = [...data]
            return {
                ...state,
                list,
                loading: false,
                error: false,

            }

        default :
            return state
    }
}
