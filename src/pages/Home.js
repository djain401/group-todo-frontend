import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import DisplayToDo from '../components/DisplayToDo';
import Table from 'react-bootstrap/Table';
import AddToDo from '../components/AddToDo';

import 'bootstrap/dist/css/bootstrap.min.css';
//import 'react-tooltip/dist/react-tooltip.css';
import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';
import {
  Pencil,
  SquareFill,
  SortAlphaDown,
  Star,
  Trash3,
  Save,
} from 'react-bootstrap-icons';

//import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

//import BootstrapTable from 'react-bootstrap-table-next';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
      alert('Error! Try again');
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
          <AddToDo addHandler={addHandler} />
        </Container>

        <br />
        <br />
        <Container>
          {/* <Table striped bordered hover>
            <thead>
              <tr>
                <th>Todo</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {showEmpty && <p>Your List is Empty ¯\_(ツ)_/¯</p>}
              {showItems &&
                todoList.map((task, index) => (
                  <DisplayToDo task={task} index={index} />
                ))}
            </tbody>
          </Table> */}

          <Table style={{ width: '625px' }} striped bordered hover>
            <thead>
              <tr>
                <th>
                  <SortAlphaDown />
                </th>
                <th style={{ fontSize: '1.25rem' }}>To Do List</th>
                <th colSpan={2}>
                  {/* <Button style={{ border: 'none', backgroundColor: '#B2BEB5' }}>
              New To Do
            </Button> */}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Save />
                  {/* <Pencil /> */}
                </td>
                <td>
                  <Form.Control
                    type="text"
                    placeholder="Enter new To Do Task"
                  />
                </td>
                <td>
                  <SquareFill color="orange" />
                </td>
                <td>{/* <Trash3 /> */}</td>
              </tr>
              <tr>
                <td>
                  <Pencil />
                </td>
                <td>
                  <Form.Control type="text" value="Mow the Lawn" disabled />
                </td>
                <td>
                  <SquareFill color="orange" />
                </td>
                <td>
                  <Trash3 />
                </td>
              </tr>
              <tr>
                <td>
                  <Pencil />
                </td>
                <td>
                  <Form.Control
                    type="text"
                    value="Dentist at 2.30pm in Wallsend"
                    disabled
                  />
                </td>
                <td>
                  <SquareFill color="green" />
                </td>
                <td>
                  <Trash3 />
                </td>
              </tr>
              <tr>
                <td>
                  {' '}
                  <Pencil />
                </td>
                <td>
                  <Form.Control
                    type="text"
                    value="Book car in for MOT"
                    disabled
                  />
                </td>
                <td>
                  <SquareFill color="orange" />
                </td>
                <td>
                  <Trash3 />
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Container>
    </>
  );
};

export default Home;
