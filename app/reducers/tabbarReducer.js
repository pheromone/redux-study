/**
 * Created by shaotingzhou on 2017/2/28.
 */

import * as types from '../actions/actionTabbar';
const initialState = {
    ClassDate: [],
    isLoading: true,

};

let classReducer = (state = initialState, action) => {
    // console.log(action)

    switch (action.type) {
        case types.ONEITEM:
            return state

        case types.TWOITEM:

            return state
        default:
            return state;
    }
}

export default classReducer;
