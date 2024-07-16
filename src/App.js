import './App.css';
import '../node_modules/bulma/css/bulma.min.css';
import Header from './Components/Header/Header.js';

function App() {
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
    </div>
    </div>
  );
}

export default App;