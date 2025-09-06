import React, { useState } from 'react'
import Create from './Create'

function Home() {

    const [todos, setTodos] = useState([])

  return (
    <div>
        <h2>TODO LIST</h2>
        <Create />

        {
            todos.length === 0 ?
                <div>
                    <h2>No Records</h2>
                </div>
                : 
                todos.map(todo => {
                    <div>
                        {todo}
                    </div>
                })
        }
    </div>
  )
}

export default Home