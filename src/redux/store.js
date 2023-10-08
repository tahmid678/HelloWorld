import { rootReducer } from "./reducer";
import { legacy_createStore } from "redux";

const Store = legacy_createStore(rootReducer);

export default Store;