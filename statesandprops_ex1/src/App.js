import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { apiData } from './data';
import HeaderComponent from './HeaderComponent';

function App() {

  // Creating state using useState
  const [data, setData] = useState(apiData);

  console.log(data)

  return (
    <div className="App">
      {/* Assignment will be to pass down Author, Age, Location as props to the HeaderComponent */}
     <HeaderComponent count={data.count}/>
    </div>
  );
}

export default App;
