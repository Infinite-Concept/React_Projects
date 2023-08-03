import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const URL = 'https://course-api.com/react-tours-project'

function App() {

  const[tourData, setTourData] = useState([])
  const[loading, setLoading] = useState(false)

  const Fetch = async () => {
    try{
      const response = await fetch(URL)
      const responses = response.json()

      setTourData(responses)
      setLoading(true)
    }
    catch(err){
      console.log(err);
      setLoading(false)
    }
  }

  useEffect(() => {
    Fetch()
  }, [])

  if(loading){
    return <main>
      <Loading />
    </main>
  }
  if(tourData.length === 0){
    return(
      <main>
          <div className='title'>
            <h2>no tour left</h2>
            <button className='btn' onClick={() => Fetch()}>Refresh</button>
          </div>
      </main>
    )
  }
  return (
    <Tours tourData={tourData} Removed={Removed} />
  )
}

export default App