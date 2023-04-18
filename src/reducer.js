import actions from "./actions";

const initialData = [
  {
    id: 1,
    task: "study",
    isComplete: false
  },
  {
    id: 2,
    task: "homework",
    isComplete: false
  }
];

export const todoData = (state = initialData, action) => {
  console.log(action, "reducer file se ara hai");
  console.log(state, "state");
  console.log(action.payload, "payload");

  switch (action.type) {
    case actions.ADD:
      const newTask = {
        id: Math.random(),
        task: action.payload,
        isComplete: false
      };
      return [...state, newTask];

    case actions.DELETE:
      state = state.filter((y) => y.id !== action.payload);
      return state;

    case actions.COMPLETE:
      action.payload.isComplete = true;
      state = [...state];
      return state;

    default:
      return state;
  }
};
