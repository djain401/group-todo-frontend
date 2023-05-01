import { Form } from "react-bootstrap";

const Search = ({ searchValue, searchHandler }) => {
  return (
    <>
      <Form.Control
        type="search"
        placeholder="Search tasks"
        name="title"
        onChange={(e) => {
          searchHandler(e.target.value);
        }}
        value={searchValue}
      />
    </>
  );
};

export default Search;
