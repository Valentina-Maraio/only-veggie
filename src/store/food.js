import {createSlice} from '@reduxjs/toolkit'
import { callFoodApi } from './newapi'

const slice = createSlice({
    name: 'foods',
    initialState: {
        list: [],
        loading: false
    },
    reducers: {
        requested: (foods, action) => {
            foods.loading = true
        },
        received: (foods, action) => {
            foods.list = action.payload
            foods.loading = false
        },
        failed: (foods, action) => {
            foods.loading = false
        }
    }
})
export default slice.reducer;

const {
    requested,
    received,
    failed
} = slice.actions;

const url = "/";

export const loadFood = () => (dispatch) => {
    return dispatch(
        callFoodApi({
            url,
            onStart: requested.type,
            onSuccess: received.type,
            onError: failed
        })
    )
}