import React from 'react';
import { Pencil, SquareFill, Trash3, Save } from 'react-bootstrap-icons';

import Form from 'react-bootstrap/Form';
const DisplayToDo = ({ task, index, handler }) => {
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
            disabled
            style={{ background: 'transparent', outline: 'none' }}
          />
        </td>
        <td>
          <SquareFill
            color={task.status ? 'green' : 'orange'}
            onClick={() => {
              handler('status', index);
            }}
          />
        </td>
        <td>
          <Trash3
            onClick={() => {
              handler('delete', index);
            }}
          />
        </td>
      </tr>
    </>
  );
};

export default DisplayToDo;
