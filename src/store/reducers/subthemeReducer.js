import {FETCH_SUBTHEMES_ERROR, FETCH_SUBTHEMES_LOADING, FETCH_SUBTHEMES_SUCCESS} from "../types/sub-themes";

const initialState = {
    list: [], loading: false, error: false,
}


export default (state = initialState,action) => {
    switch (action.type) {
        case  FETCH_SUBTHEMES_LOADING:
            return {
                ...state, loading: true, error: false,
            }

        case FETCH_SUBTHEMES_ERROR:
            return {
                ...state, loading: false, error: true,
            }

        case FETCH_SUBTHEMES_SUCCESS:

            return {
                ...state, list: (action.payload.data ?action.payload.data: []), loading: false, error: false,
            }

        default :
            return state
    }
}
