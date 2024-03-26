import Banner from './components/Banner/Banner.js';
import Form from './components/Formulario/index.js';

//chama banner na função numa tag (tag React) que criamos e é como se fosse html. 
function App() {
  return (
    <div className="App">
      <Banner />
      <Form />

    </div>
  );
}

export default App;
