import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import ResidentCards from './components/ResidentCards'
import header from './assets/img/banner.png'

function App() {

  const [characterType, setCharacterType] = useState({});
  const [searchId, setSearchId] = useState("")

  useEffect(() => {
    const randomCharacter = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${randomCharacter}`)
      .then(res => setCharacterType(res.data))
  }, [])

  // console.log(characterType.residents)

  const searchType = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${searchId}`)
      .then(res => setCharacterType(res.data));

  }
  // console.log(searchType)

  return (
    <div className="App">
      <header>
        <img src={header} alt="" />
      </header>
      <div className='main__contain'>
        <div className='input'>
          <input className='search'
            type="number"
            min={1} max={126}
            placeholder='type any ID (1-126)'
            value={searchId}
            onChange={e => setSearchId(e.target.value)}
          />
          <button onClick={searchType} className="btn_search">search location</button>
        </div>

        
        <div className=' location__info'>
          <h1>{characterType.name}</h1>
          <h2>ID:{characterType.id}</h2>
          <h2>Type:{characterType.type}</h2>
          <h2>Dimension:{characterType.dimension}</h2>
          <h2>Residents:{characterType.residents?.length}</h2>
        </div>
        <ul>{

          characterType.residents?.map(url => (
            <ResidentCards
              resident={url}
              key={url}
            />
          ))
        }</ul>
      </div>

    </div>
  )
}

export default App
