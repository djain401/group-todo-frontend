import { Form } from "react-bootstrap";

const Search = ({ searchHandler }) => {
  return (
    <>
      <Form id="form" className="justify-content-center gap-3 w-50">
        <Form.Control
          // className="search-box py-2"
          placeholder="Search tasks"
          name="title"
          onChange={(e) => {
            searchHandler(e.target.value);
          }}
        />
      </Form>
    </>
  );
};

export default Search;
