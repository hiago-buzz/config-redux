import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { actions } from './actions/todo'
import { selectors } from './selectors/todo'

const App = () => {

  const [task, updateTask] = useState("");

  const dispatch = useDispatch();
  const tasks = useSelector(selectors.getTasks);

  const handleInputChange = event => {
    updateTask(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    dispatch(actions.addTask(task))
    updateTask("");
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input onChange={handleInputChange} value={task} />
        <button>add</button>
      </form>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </>
  );
};

// const mapStateToProps = (state) => ({
//   tasks: state,
// });

// const mapDispachToProps = dispatch => ({
//   addTask: (task) =>
//     dispatch({
//       type: "TODO_ADD_TASK",
//       payload: task,
//     }),
// });
export default App;
