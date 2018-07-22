import { ADD_TASK, DO_FILTTER } from "./TaskActionTypes";
const FilterValue = {
  TODO: 1,
  INPROGRESS: 2,
  COMPLETED: 3,
  ALL: 4
};
const addTask = taskName => {
  return {
    type: ADD_TASK,
    taskName: taskName
  };
};

const doFilter = filterValue => {
  return {
    type: DO_FILTTER,
    filterValue: filterValue
  };
};

export { addTask, doFilter, FilterValue };
