import './App.css';
// import DataTable from './Components/DataTable';
// import DataTablea from './Components/test/DataTable';
import Testb from "./Testb"
import Testc from "./Testc"
import Testd from "./Testd"

function App() {
  return (


    <div className="App">
      {/* DataGrid is used showing 10 results per page */}
      {/* <DataTablea /> */}
      {/* ----------------------- */}

      {/* ----------------------- */}
      {/* without using params fetch data showing as 10 per page  */}
      {/* <Testb /> */}
      {/* ----------------------- */}

      {/* ----------------------- */}
      {/* // using params from URL only giving 10 results on one page */}
      {/* <Testc /> */}
      <Testd />
      {/* ----------------------- */}

    </div>
  );
}

export default App;
