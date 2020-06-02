import { createAction } from "typesafe-actions";

export const ADD_TODO = "todos/ADD_TODO";

export const addTodo = createAction(ADD_TODO)<string>();
