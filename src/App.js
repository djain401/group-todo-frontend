import FancyTable from './components/FancyTable/FancyTable';
import './App.css';

function App() {
  const dummyData = [{
    id: 1,
    task: 'Finish this table',
    status: false
  },
  {
    id: 2,
    task: 'Read Bootstrap pink theme',
    status: false
  },
  {
    id: 3,
    task: 'Get scaffolders to finish the job',
    status: true
  },
  {
    id: 4,
    task: 'Finish update, delete on CRUD app',
    status: false
  }
];


  return (
    <div className="App">
      
      {/* Testing the table component with dummy data
      Headers should be an array,
      data should be an array of objects. */}
      <FancyTable headers={['Task', 'Status', 'Edit', 'Delete']} data={dummyData} />
    </div>
  );
}

export default App;
