import React from "react";
import { Pencil, SquareFill, Trash3, Save } from "react-bootstrap-icons";

import Form from "react-bootstrap/Form";
const DisplayToDo = ({ task, index }) => {
  return (
    <>
      <tr>
        <td>
          {/* <Save /> */}
          <Pencil />
        </td>
        <td>
          <Form.Control
            type="text"
            value={task.title}
            Disabled
            style={{ background: "transparent", outline: "none" }}
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
