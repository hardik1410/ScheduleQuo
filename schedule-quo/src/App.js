import logo from './resources/images/logo1.png';
import './App.css';



function Header(props){
  console.log(props);
  return(
    <header>
      <h1>This Web App is called {props.name}</h1>
    </header>
  )
}

function Main(props) {
  return(
    <section>
      
      <img src={logo} 
      height={400} 
      width={400} 
      alt="Logo goes here" 
      />
      <p>There are a lot of {props.adjective} developers in here</p>
      <ul>
        {props.developers.map((developer) => (
        <li key={developer.id}>{developer.title}</li>
        ))}
      </ul>
    </section>
  )
}

function Footer(props) {
  return(
    <section>
      <p>Copyright {props.year}</p>
    </section>
  )
}

const developers = [
  "Ashish Patel",
  "Hardikkumar Makwana",
  "Jaykumar Patel"
]

const developerObjects = developers.map((developer,i) => ({id :i, title:developer}));
console.log(developerObjects);


function App() {
  return (
    <div className="App">
      <Header name="ScheduleQuo"/>
      <Main adjective="amazing" developers={developerObjects}/>
      <Footer year={new Date().getFullYear()}/>      
    </div>
  );
}

export default App;
