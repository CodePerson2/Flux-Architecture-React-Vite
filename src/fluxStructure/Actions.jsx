import { SET_COUNT, INCREMENT_COUNT, DECREMENT_COUNT, RESET_COUNT } from './ActionNames';

export const actions = (instance, action) => {
    switch (action.type) {
        case SET_COUNT:
            instance.state.count = action.payload;
            instance.emitChange();
            break;
        case INCREMENT_COUNT:
            instance.state.count += 1;
            instance.emitChange();
            break;
        case DECREMENT_COUNT:
            instance.state.count -= 1;
            instance.emitChange();
            break;
        case RESET_COUNT:
            instance.reset();
            break;
        // Add more cases as needed for other actions
        default:
            break;
    }
}