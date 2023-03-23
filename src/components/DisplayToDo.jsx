import React from "react";

const DisplayToDo = ({ task, index }) => {
  return (
    <>
      <tr>
        <td>{task.title}</td>
        <td>{task.status ? "Done" : "Mark as Complete"}</td>
        <td>edit/delete</td>
      </tr>
    </>
  );
};

export default DisplayToDo;
