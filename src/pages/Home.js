import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import DisplayToDo from "../components/DisplayToDo";
import Table from "react-bootstrap/Table";
import Search from "../components/Search";
import { SortAlphaDown } from "react-bootstrap-icons";
import AddTask from "../components/AddTask";

const Home = () => {
  const [todoList, setTodoList] = useState([]);
  const [showEmpty, setShowEmpty] = useState(false);
  const [showItems, setShowItems] = useState(false);

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
          <Search />
        </Container>

        <br />
        <br />
        <Container>
          <Table style={{ width: "625px" }} striped bordered hover>
            <thead>
              <tr>
                <th
                  colspan={4}
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
                todoList.map((task, index) => (
                  <DisplayToDo task={task} index={index} />
                ))}
            </tbody>
          </Table>
        </Container>
      </Container>
    </>
  );
};

export default Home;
