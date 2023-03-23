import React, { useState } from "react";
import { Pencil, SquareFill, Trash3, Save } from "react-bootstrap-icons";

import Form from "react-bootstrap/Form";

const DisplayToDo = ({ task, index, updateHandler }) => {
  const [updateFlag, setUpdateFlag] = useState(false);
  const [updateTask, setUpdateTask] = useState("");

  const handleClick = () => {
    if (updateFlag && updateTask.length > 0) {
      const taskData = {
        title: updateTask,
      };
      updateHandler(taskData, task._id);
      setUpdateFlag(!updateFlag);
    } else {
      setUpdateFlag(!updateFlag);
    }
  };
  return (
    <>
      <tr>
        <td>
          {updateFlag ? (
            <Save style={{ cursor: "pointer" }} onClick={handleClick} />
          ) : (
            <Pencil style={{ cursor: "pointer" }} onClick={handleClick} />
          )}
        </td>
        <td>
          <Form.Control
            type="text"
            defaultValue={task.title}
            disabled={updateFlag ? false : true}
            style={{ background: "transparent", outline: "none" }}
            onChange={(e) => {
              e.preventDefault();
              setUpdateTask(
                e.target.value.replace(/^./, e.target.value[0].toUpperCase())
              );
            }}
            name="title"
          />
        </td>
        <td>
          <SquareFill color={task.status ? "green" : "orange"} />
        </td>
        <td>
          <Trash3 />
        </td>
      </tr>
    </>
  );
};

export default DisplayToDo;
