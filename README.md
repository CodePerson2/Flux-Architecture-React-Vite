#Flux Architecture with React + Vite
This repo demonstrates a minimal Flux architecture integrated with a Vite + React app.

##📦 Structure

├── App.jsx              // Main React component
├── flux/
│   ├── Dispatcher.js    // Singleton dispatcher
│   ├── Store.js         // State container and listener system
│   ├── Actions.js       // Action handlers
│   └── ActionNames.js   // Action name constants

##⚙️ Setup
```bash
npm install
npm run dev
🧠 Core Concept
This setup implements unidirectional data flow using Flux:

App triggers actions.

Actions are dispatched via the dispatcher.

Store listens and mutates internal state.

Components listen for store updates and re-render.

###🧱 Example Store

// Store.js
handleActions(action) {
    actions(this, action); // Delegate logic to actions
}

###🔁 Listening to Changes
Components can subscribe to the store:


useEffect(() => {
    const onChange = () => setCount(store.getState().count);
    store.addChangeListener(onChange);
    return () => store.removeChangeListener(onChange);
}, []);

##🚀 Why This?
Clean Flux pattern with minimal boilerplate

Easy to extend

Fast setup via Vite

##🧼 Reset State
js
Copy
Edit
store.reset(); // Resets to initial state and notifies listeners