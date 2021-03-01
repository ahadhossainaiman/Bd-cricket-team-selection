import { useEffect, useState } from 'react';
import './App.css';
import Player from './components/player/Player';
import userData from './fakeData/data.json';
import AddPlayer from './components/addPlayer/addPlayer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [ players,setPlayers ] = useState([])
  const [ addedPlayer,setAddedPlayer ]= useState([])
  useEffect(() => {
    fetch(userData)
    .then(userData => setPlayers(userData))
    .catch( error => console.log(error))
  }, [])

  const handleAddPlayer = (player) => {
    const newPlayer = [...addedPlayer,player];
    setAddedPlayer(newPlayer);
  }


  return (
    <div className="App">
      <div className='bg-secondary'>
        <div className="border border-danger bg-dark bg-gradient">
        <h1 className='player-cart'>Player Cart</h1>
        <h1 className='selected-player'>Player Selected: {addedPlayer.length}</h1>
        <AddPlayer addedPlayer={addedPlayer}></AddPlayer>
        </div>
           {
             userData.map(player =><Player player={player} key ={player.id} handleAddPlayer={handleAddPlayer}></Player>)
           }
         </div>
    </div>
  );
}

export default App;
