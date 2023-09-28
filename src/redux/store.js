import {createStore} from "redux";
import { rootReducer } from "./reducer/rootReducer";

export let store = createStore (
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)