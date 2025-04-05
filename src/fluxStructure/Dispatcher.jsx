export class Dispatcher {
    constructor() {
        this.callbacks = [];
    }

    register(callback) {
        this.callbacks.push(callback);
    }

    dispatch(action) {
        for (const callback of this.callbacks) {
            callback(action);
        }
    }
}

export const dispatcher = new Dispatcher();