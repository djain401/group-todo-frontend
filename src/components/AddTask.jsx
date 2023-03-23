import React from "react";
import { Form, Button } from "react-bootstrap";

const AddTask = (addHandler) => {
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     title: e.target.title.value,
  //     status: false,
  //   };

  //   await addHandler(data);
  //   e.target.title.value = "";
  // };

  return (
    <>
      {/* <Form onSubmit={handleSubmit}> */}
      <tr>
        <td colspan={3}>
          <Form.Control type="text" placeholder="Add a new task" />
        </td>
        <td>
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
        </td>
      </tr>
      {/* </Form> */}
    </>
  );
};

export default AddTask;
