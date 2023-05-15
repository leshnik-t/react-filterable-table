import './App.css';
import { useState, useEffect } from 'react';
import FilterableProductTable from './components/FilterableProductTable';
// import PRODUCTS from './products-data.json';
// import PRODUCTS from './products-data-small.json';

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch(
      './data/products-data.json',
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setData(data);
    })
    .catch((e) => {
      console.log(e.message);
    })
  }

  useEffect(() => { 
    getData() 
  }, []);
  
  return (
    <main>
      <div className="App">
        <div className="container">
          <div className="row">
              <div className="col">
                <h1>React Filterable Table</h1>
                <FilterableProductTable products={data}/>
              </div>
            </div>
        </div>
      </div>
    </main>
  );
}

export default App;
