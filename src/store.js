import { createStore } from "redux";
import { todoData } from "./reducer";

export const store = createStore(todoData);
