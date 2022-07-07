import axios from 'axios'
import * as actions from '../newapi'

const apifood = ({dispatch}) => (next) => async(action) => {
    if(action.type !== actions.callFoodApi.type)
    return next(action);

    const {
        url,
        method,
        data,
        onStart,
        onSuccess,
        onError
    } = action.payload;

    if(onStart) dispatch({type: onStart});

    next(action);

    try{
        const response = await axios.request({
            baseURL: `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=20`,
            url,
            method,
            data,
        });
        dispatch(action.successCall(response.data));
        if(onSuccess) dispatch({type: onSuccess, payload: response.data});
    } catch (error){
        dispatch(actions.failedCall(error.message));
        if(onError) dispatch({type: onError, payload: error.message})
    }
}

export default apifood;