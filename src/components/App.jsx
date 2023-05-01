import React, { useEffect, useState } from 'react'

function App() {
  const [ steamData, setSteamData ] = useState()


  useEffect(() => {
    try {
      fetch('https://api.opendota.com/api/players/76561198159884474/recentMatches')
      .then((res) => {
        console.log(res)
        setSteamData(JSON.parse(res))
      })
    } catch(error) {
      console.log(error.message)
    }
  }, [])

  return (
   <div>
      <h1>hello</h1>
   </div>
  )
}

export default App
