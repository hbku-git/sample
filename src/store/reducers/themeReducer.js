import {FETCH_THEMES_ERROR, FETCH_THEMES_LOADING, FETCH_THEMES_SUCCESS} from "../types/themes";

const initialState = {
    list: [], loading: false, error: false,
}


export default (state = initialState,action) => {
    switch (action.type) {
        case  FETCH_THEMES_LOADING:
            return {
                ...state, loading: true, error: false,
            }

        case FETCH_THEMES_ERROR:
            return {
                ...state, loading: false, error: true,
            }

        case FETCH_THEMES_SUCCESS:

            return {
                ...state, list: (action.payload.data ?action.payload.data: []), loading: false, error: false,
            }

        default :
            return state
    }
}
