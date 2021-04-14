import './App.css';
import {useState, useEffect} from 'react'

function url(path){
  return process.env.NODE_ENV === 'development'
  ? `http://localhost:5000${path}` : path

}

function App() {
  const [data, setData] = useState('Hi')
  useEffect(()=>{
    // setData(data+"!")
    fetch(url('/api/overclocks'))
    .then(resp => resp.json()) //turn the receives data into json
    .then(apiData => setData(apiData.data)) //set our data in state
  },[])


  return (
    <div className="App">
      <div className='container'>
        <div className='card'>
          <h1>Welcome to the Deep Rock Galactic OverClocks API</h1>
          <h2><a href="" target="_blank">Fetch data from <span>/api/overclocks</span></a></h2>
        </div>
      </div>
    </div>
  );
}

export default App;
