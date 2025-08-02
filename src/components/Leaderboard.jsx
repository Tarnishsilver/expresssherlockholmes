import React, {useEffect} from 'react'

const Leaderboard = () => {
  useEffect(() => {
    document.title = "Leaderboard - express";
  }, []);

  return (
    <div>
      This is a Leaderboard
    </div>
  )
}

export default Leaderboard

