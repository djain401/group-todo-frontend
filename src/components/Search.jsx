import { Form } from "react-bootstrap";
import React from "react";

const Search = ({ searchHandler }) => {
  return (
    <>
      <Form id="form" className="d-flex gap-3 w-50">
        <Form.Control
          // className="search-box py-2"
          placeholder="Search tasks"
          name="title"
          onChange={(e) => searchHandler(e.target.value)}
        />
      </Form>
    </>
  );
};

export default Search;
