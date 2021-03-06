import {combineReducers, createStore, Store, applyMiddleware} from "redux";
import { composeWithDevTools} from "redux-devtools-extension";
import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogReducer'
import {sideBarReducer} from "./sidebarReducer";
import {usersReducer} from "./userReducer";
import {authReducer} from "./auth-reducer";
import thunk from "redux-thunk";
import {appReducer} from "./app-reducer";

// declare global {
//     interface  Window {
//         _REDUX_DEVTOOLS_EXTENSION_COMPOSE_?: typeof compose
//     }
// }

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
    // form: formReducer
})

// const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
export const store: Store<AppStateType> = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store
