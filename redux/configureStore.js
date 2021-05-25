import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { exercises } from "./exercise";

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			exercises
		}),
		applyMiddleware(thunk, logger)
	);
	return store;
};
