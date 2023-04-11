import {makeStyles} from '@material-ui/core'
import About from './components/About';
import Contact from './components/Contact';
import MyWork from './components/MyWork';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Header from './components/NavBar';

function App() {
  const clases = useStyles();
  return (
    <div className={clases.root}>
      <Header/>
      <About title="About Me" id="about" dark={true}/>
      <Skills title="My Skills" id="skills" dark={false}/>
      <MyWork title="My Proyects" id="work" dark={true}/>
      <Contact title="Formulario de contacto" id="contact" dark={false}/>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {

  }
}))

export default App;
