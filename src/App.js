import {makeStyles} from '@material-ui/core'
import About from './components/About';
import Contact from './components/Contact';
import MyWork from './components/MyWork';
import NavBar from './components/NavBar';
import Skills from './components/Skills';

function App() {
  const clases = useStyles();
  return (
    <div className={clases.root}>
      <NavBar/>
      <About title="About Me" id="about" dark={true}/>
      <Skills title="titulo de skills" id="skills" dark={false}/>
      <MyWork title="titulo de work" id="work" dark={true}/>
      <Contact title="titulo de contact" id="contact" dark={false}/>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {

  }
}))

export default App;
