import { Form, Button } from "react-bootstrap";

const Search = ({ addHandler }) => {
  // const [task, setTask] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: e.target.title.value,
      status: false,
    };

    await addHandler(data);
    e.target.title.value = "";
  };

  return (
    <>
      <Form onSubmit={handleSubmit} id="form" className=" d-flex gap-3 w-50">
        <Form.Control
          // className="search-box py-2"
          placeholder="What do you need to do today?"
          minLength="2"
          name="title"
          required
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
    </>
  );
};

export default Search;
