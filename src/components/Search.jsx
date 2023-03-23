import { Form } from "react-bootstrap";
import React, { useState } from "react";

const Search = ({ searchHandler }) => {
  const [searchField, setSearchField] = useState("");
  return (
    <>
      <Form id="form" className="d-flex gap-3 w-50">
        <Form.Control
          // className="search-box py-2"
          placeholder="Search tasks"
          name="title"
          onChange={(e) => {
            setSearchField(e.target.value);
            searchHandler(searchField);
          }}
        />
      </Form>
    </>
  );
};

export default Search;
