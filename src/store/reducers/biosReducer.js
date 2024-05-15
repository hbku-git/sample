import {FETCH_BIOS_ERROR, FETCH_BIOS_LOADING, FETCH_BIOS_SUCCESS} from "../types/bios";
import {PAGE_SIZE} from "../constants";

const initialState = {
    list: [], loading: false, error: false, page: 0, canLoadMore: true
}


export default (state = initialState, action) => {
    switch (action.type) {
        case  FETCH_BIOS_LOADING:
            return {
                ...state, loading: true, error: false,
            }

        case FETCH_BIOS_ERROR:
            return {
                ...state, loading: false, error: true,
            }

        case FETCH_BIOS_SUCCESS:
            const {data, page} = action.payload;
            console.log('success', {data, page});

            const list = action.payload.page ? [...state.list, ...(data ? data : [])] : (data ? data : []);
            return {
                ...state,
                list,
                loading: false,
                error: false,
                page: page ? page : 0,
                canLoadMore: page === 0 ? true : data.length === PAGE_SIZE
            }

        default :
            return state
    }
}
