import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {

  const[tourData, setTourData] = useState([])
  const[loading, setLoading] = useState(true)

  const removeTour =(id) => {
    const newTours = tourData.filter((tour) => tour.id !== id)
    setTourData(newTours)
  }

  const Fetch = async()=>{

    setLoading(true)
    try{
      const Response = await fetch(url)
      const Data = await Response.json()
      setTourData(Data)
      setLoading(false)
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
   return( 
   <main>
        <Loading />
    </main>
    )
  }
  if(tourData.length === 0){
    return(
      <main>
        <div className='title'>
          <h2>No Tour Left</h2>
          <button className='btn' onClick={() => Fetch()} >Refresh</button>
        </div>
      </main>
    )
  }

  return (
    <main >
      <Tours tourData={tourData}  removeTour={removeTour} />
    </main>
  )
}

export default App