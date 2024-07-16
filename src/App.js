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

  return (
   <div>
    <Header />

    <div className='container px-3'>

      <h2 className='title mt-5'>
        Rentrez vos tâches à faire
      </h2>

      <form>
        <div className='field'>
          <div className='control'>
            <label htmlFor='tache' className='label'>Tâche</label>
            <input
            className='input'
            type='text'
             id='tache'
              placeholder='fais 1 tâche'/>
          </div>
        </div>


        <div className='field'>
          <div className='control'>
            <label htmlFor='txt' className='label'>Contenu de la tâche
            </label>
            <textarea
            className='textarea'
            type='text'
             id='txt'
              placeholder='fais 1 tâche'
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
        tache={todo.tache}
        txt={todo.txt}
        />
      ))
      }

    </div>
    </div>
  );
}

export default App;