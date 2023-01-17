import { useState, useEffect, useLocation } from 'react';
import Pagination from '@mui/material/Pagination';
import { Typography } from '@mui/material'
import { BsGithub } from "react-icons/bs"
import Search from './components/Search';

function App() {

  const [personagens, setPersonagem] = useState([]);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("")
  

  // CONSUMO DE API
  const api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(data => {
        setPersonagem(data.results)
      })

  }, [api])

  // PAGINATION

  const handleChange = (event, value) => {

    setPage(value);
  };

  return (
    // Logo
    <div className="container">
      <header>
        <div className='logo'><img src="/Rick_and_Morty.svg" alt="logo rick and morty" /></div>
        </header>
        {/* end Logo */}
        {/* search */}
          <Search setName={setName}/>
        {/* end search */}

        {/* conteúdo */}
      <div className='area-container'>
        {personagens.map(personagem => {
          return (
            <div class="card">
              <img src={personagem.image} alt={personagem.name} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">{personagem.name}</h5>
                <p class="card-text">Gênero: {personagem.gender}</p>
                <p class="card-text">Especie: {personagem.species}</p>
                <p class="card-text">Status: {personagem.status}</p>
                <p class="card-text">Localização: {personagem.location.name}</p>
              </div>

            </div>

          )
        })}
      </div>

      <div className='pagination'>
        {/* <Typography>Page: {page}</Typography> */}
        <Pagination count={42} page={page} onChange={handleChange} />
      </div>
      <footer>
        <div>  
          <h3>Feito por Ruan Freire</h3>
          <a href="https://github.com/Ruanfrm"><BsGithub size={25} color="#000" /></a>
        </div>
        <p>Este site é apenas uma demostração dos personagens de Rick and Morty.</p>
      </footer>
    </div>
  );
}

export default App;
