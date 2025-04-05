import { dispatcher } from './Dispatcher';
import { actions } from './Actions';

export class Store {
    constructor(dispatcher) {
        this.state = this.getInitialState();
        this.listeners = [];

        dispatcher.register(this.handleActions.bind(this));
    }

    getInitialState() {
        return {
            count: 0,

        };
    }

    handleActions(action) {
        actions(this, action);
    }

    getState() {
        return this.state;
    }

    addChangeListener(listener) {
        this.listeners.push(listener);
    }

    removeChangeListener(listener) {
        this.listeners = this.listeners.filter(l => l !== listener);
    }

    emitChange() {
        this.listeners.forEach(listener => listener());
    }

    reset() {
        this.state = this.getInitialState();
        this.emitChange();
    }
}

export const store = new Store(dispatcher);