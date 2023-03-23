import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import DisplayToDo from "../components/DisplayToDo";
import Table from "react-bootstrap/Table";
import Search from "../components/Search";
import AddTask from "../components/AddTask";

const Home = () => {
  const [todoList, setTodoList] = useState([]);
  const [showEmpty, setShowEmpty] = useState(false);
  const [showItems, setShowItems] = useState(false);
  const [searchField, setSearchField] = useState("");

  const addHandler = async (task) => {
    try {
      const postUrl = `${process.env.REACT_APP_BE_LOCAL}/todo`;
      const result = await axios.post(postUrl, task);
      console.log(result.data);
      setTodoList(result.data);
    } catch (error) {
      console.log(error);
      alert("Error! Try again");
    }
  };

  const searchHandler = async (searchValue) => {
    setSearchField(searchValue);
    console.log(searchField);
    console.log(searchValue);
  };

  const updateHandler = async (todo, id) => {
    const result = await axios.put(
      `${process.env.REACT_APP_BE_LOCAL}/todo/${id}`,
      todo
    );
    setTodoList(result.data);
  };

  useEffect(() => {
    try {
      const getTodoList = async () => {
        const todos = await axios.get(`${process.env.REACT_APP_BE_LOCAL}/todo`);
        if (todos.data.length > 0) {
          console.log(todos.data);
          setTodoList(todos.data);
          setShowItems(true);
          setShowEmpty(false);
        } else {
          setShowItems(false);
          setShowEmpty(true);
        }
      };
      getTodoList();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <Container className="mt-4" fluid>
        <Container>
          <Search searchHandler={searchHandler} />
        </Container>

        <br />
        <br />
        <Container>
          <Table style={{ width: "625px" }} striped bordered hover>
            <thead>
              <tr>
                <th
                  colSpan={4}
                  style={{ fontSize: "1.25rem", alignContent: "center" }}
                >
                  To Do List
                </th>
              </tr>
            </thead>
            <tbody>
              <AddTask addHandler={addHandler} />
              {showEmpty && <p>Your List is Empty ¯\_(ツ)_/¯</p>}
              {showItems &&
                todoList
                  .filter((task) => {
                    return task.title.toLocaleLowerCase().includes(searchField);
                  })
                  .map((task, index) => (
                    <DisplayToDo
                      task={task}
                      index={index}
                      key={index}
                      updateHandler={updateHandler}
                    />
                  ))}
            </tbody>
          </Table>
        </Container>
      </Container>
    </>
  );
};

export default Home;
