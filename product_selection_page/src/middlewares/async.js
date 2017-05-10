// The redux-promise middleware does a similar thing
// I implemented this for demonstration purposes

export default function({ dispatch }){
    return next => action => {
        // If this action does not have a promise, keep going
        if(!action.payload || !action.payload.then){
            return next(action);
        }

        // Make sure the action promise resolves
        action.payload.then((response) => {
            //return new action with same type
            const newAction =  { ...action, payload: response};
            dispatch(newAction);
        });


    }
}