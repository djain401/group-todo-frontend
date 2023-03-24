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

  const [sortCount, setSortCount] = useState(0);

  const [searchValue, setSearchValue] = useState("");

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

  const searchHandler = async (value) => {
    setSearchValue(value);
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

  // event handling system for icons

  const mainHandler = (iconFunction, index) => {
    switch (iconFunction) {
      case "A-Z":
        sortAZ();
        break;
      case "Z-A":
        sortZA();
        break;
      case "statSort":
        //sortStatus();
        break;
      case "edit":
        //editHandler(index);
        break;
      case "status":
        statusHandler(index);
        break;
      case "delete":
        delHandler(index);
        break;
      default:
        break;
    }
  };

  // handler functions for each task listed below

  // toggle status of task by updating record in db

  const statusHandler = async (i) => {
    console.log("in the status handler");

    try {
      const tempObj = todoList[i];
      const idStr = tempObj._id;
      console.log(idStr);
      console.log(tempObj);
      tempObj.status ? (tempObj.status = false) : (tempObj.status = true);

      const putUrl = `${process.env.REACT_APP_BE_LOCAL}/todo/${idStr}`;
      console.log(putUrl);
      const newTodoList = await axios.put(putUrl, tempObj);

      setTodoList(newTodoList.data);
    } catch (error) {
      console.log(error);
      alert("Error! Try again");
    }
  };

  // delete task in db by use of _id

  const delHandler = async (i) => {
    console.log("hey we are in the delete handler");

    //let i = e.target.attributes.getNamedItem('idx').value;
    console.log(i, "  index value");

    if (window.confirm("Are you sure you want to delete?")) {
      console.log("in delete");

      try {
        const tempObj = todoList[i];
        const idStr = tempObj._id;
        console.log(idStr);
        const deleteUrl = `${process.env.REACT_APP_BE_LOCAL}/todo/${idStr}`;
        console.log(deleteUrl);
        const newTodoList = await axios.delete(deleteUrl);

        setTodoList(newTodoList.data);
      } catch (error) {
        console.log(error);
        alert("Error! Try again");
      }
    }
  };

  // array sorting methods

  const sortAZ = () => {
    todoList.sort(function (a, b) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    setTodoList(todoList);
  };

  const sortZA = () => {
    todoList.sort(function (a, b) {
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return -1;
      }
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    setTodoList(todoList);
  };

  const sortStatusDone = () => {
    todoList.sort(function (a, b) {
      if (a.status > b.status) {
        return -1;
      }
      if (a.status < b.status) {
        return 1;
      }
      return 0;
    });
    setTodoList(todoList);
  };

  const sortStatusPending = () => {
    todoList.sort(function (a, b) {
      if (a.status < b.status) {
        return -1;
      }
      if (a.status > b.status) {
        return 1;
      }
      return 0;
    });
    setTodoList(todoList);
  };

  const testHandler = (e) => {
    console.log("n table title    ", e);

    switch (sortCount) {
      case 0:
        sortAZ();
        break;
      case 1:
        sortZA();
        break;
      case 2:
        sortStatusDone();
        break;
      case 3:
        sortStatusPending();
        break;
      default:
        break;
    }

    setSortCount((sortCount + 1) % 4);
  };

  return (
    <>
      <Container className="mt-4" fluid>
        <Container style={{ width: "50vw" }}>
          <Search searchHandler={searchHandler} />
        </Container>

        <br />
        <br />
        <Container style={{ width: "50vw" }}>
          {/* <Table striped bordered hover> */}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th
                  onClick={testHandler}
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
                    return task.title.toLocaleLowerCase().includes(searchValue);
                  })
                  .map((task, index) => (
                    <DisplayToDo
                      task={task}
                      index={index}
                      key={task._id}
                      updateHandler={updateHandler}
                      handler={mainHandler}
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
