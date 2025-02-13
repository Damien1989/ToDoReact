import './App.css';
import '../node_modules/bulma/css/bulma.min.css';
import Header from './Components/Header/Header.js';
import Card from './Components/Card/Card.js';
import { useState } from 'react';

function App() {


const [monState, setMonState] = useState([
  {tache: 'Promener son chien', txt:'Tôt le matin'},
  {tache: 'Faire du sport', txt:'3 fois par semaine'},
  {tache: 'Manger au resto', txt:'Le samedi midi avec Momo'}
])

const [tache, setTache] = useState();
const [txt, setTxt] = useState();

function creationCarte(e){
  e.preventDefault();

  const nvTab = [...monState, {tache: tache, txt: txt}]
  setMonState(nvTab);

  setTache('');
  setTxt('');
}

function deleteCards(index) {

  const cleanCards = [...monState];

  setMonState(cleanCards.filter(item => cleanCards.indexOf(item)
  !== cleanCards.indexOf(cleanCards[index])))
}

  return (
   <div>
    <Header />

    <div className='container px-3'>

      <h2 className='title mt-5'>
        Rentrez vos tâches à faire
      </h2>

      <form onSubmit={creationCarte}>
        <div className='field'>
          <div className='control'>
            <label htmlFor='tache' className='label'>Tâche</label>
            <input
            value={tache}
            className='input'
            type='text'
             id='tache'
              placeholder='fais 1 tâche'
              onChange={e => setTache(e.target.value)}
              />
          </div>
        </div>


        <div className='field'>
          <div className='control'>
            <label htmlFor='txt' className='label'>Contenu de la tâche
            </label>
            <textarea
            value={txt}
            className='textarea'
            type='text'
             id='txt'
              placeholder='Décris ton activité'
              onChange={e => setTxt(e.target.value)}
              >
              </textarea>
          </div>
        </div>

        <div className='control'>

          <button type='submit' className='button is-link'>Créer une tâche</button>
        </div>
      </form>

      {
      monState.map((todo, index) => (
        <Card
        key={index}
        index={index}
        tache={todo.tache}
        txt={todo.txt}
        deleteCart={deleteCards}
        />
      ))
      }

    </div>
    </div>
  );
}

export default App;