import axios from 'axios'
import { useEffect, useState } from 'react'

const App = () => {
  const [jokes, setjokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((res) => {setjokes(res.data)})
    .catch((err) => {
      console.log(err);
      
    })
  }, [])
  return (
    <div>
      <h1>!!!!!!!!!!!!   WELCOME    !!!!!!!!!!</h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((joke, index) => (
          <div key={index}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </div>
  )
}

export default App
