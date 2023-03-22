import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';



const FancyTable = ({ headers, data }) => {
  
  const [searchField, setSearchField] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  
    
  }, [searchField, data, tasks]);

  const filterTodos = () => (tasks.filter((todo) => {
    return todo.task.toLocaleLowerCase().includes(searchField);
  }));
  
  const onSearchChange = (event) => {
    const currentSearch = event.target.value.toLocaleLowerCase();
    setSearchField(currentSearch);
    filterTodos();
  };

  const filterCompleted = () => (data.filter((todo) => {
    return todo.status === true;
  }));

  // always show the search row, to make optional use: !search ? null :
  const searchRow = (
    <tr className='search-row'>
      <td key={0}>
        <Form>
          <Form.Control
            type='text'
            className='search-input'
            placeholder='Search'
            onChange={onSearchChange}
          />
        </Form>
      </td>
      <td key={1}>
        <Form>
          <Form.Check
            type='switch'
            id='custom-switch'
            label='Completed'
            onChange={filterCompleted}
          />
        </Form>
      </td>
    </tr>
  );

  // the unicode code points are a down arrow & up arrow
  return (
    <section className='fancy-table'>
      
      <Table striped bordered hover>
        <thead >
          <tr>
            {headers.map((title, idx) => {
              return <th key={idx}>{title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {searchRow}
          {data.map((row, rowIdx) => {
            // Edit this part
            return (
              <tr key={rowIdx} data-row={rowIdx}>
                {/* 4 columns in this one to keep it simple */}
                <td>{data[rowIdx].task}</td>
                <td>{data[rowIdx].status}</td>
                {/* Place the update, delete btns in here with id as a prop */}
                <td className='update-col'>
                  {/* <Button variant='success' onClick={() => showUpdateModal(data._id)}>Update</Button> */}
                </td>
                <td className='delete-col'>
                  {/* <Button variant='warning' onClick={() => deleteItem(data._id)}>Delete</Button> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </section>
  );
};

export default FancyTable;
