import React from 'react';
import { Form, Button } from 'react-bootstrap';

const AddTask = ({ addHandler }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: e.target.title.value.replace(
        /^./,
        e.target.title.value[0].toUpperCase()
      ),
      status: false,
    };

    await addHandler(data);
    e.target.title.value = "";
  };

  return (
    <>
      <tr>

        <td colSpan={4}>
          <Form onSubmit={handleSubmit} id="form" className=" d-flex gap-3">
            <Form.Control
              type="text"
              placeholder="Add a new task"
              name="title"
            />

            <Button
              style={{
                background: "#a16bfe",
                border: "none",
                color: "white",
              }}
              className="search-btn"
              type="submit"
            >
              +
            </Button>
          </Form>

        </td>
      </tr>
    </>
  );
};

export default AddTask;
