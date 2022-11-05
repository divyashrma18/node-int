import logo from './logo.svg';
import './App.css';
import Header from './Mycomponents/Header'
import {Todos} from './Mycomponents/Todos';
import { Footer } from "./Mycomponents/Footer";

function App() {
  let todos =[
    {
      Sno: 1,
      title: "you need to go to the market",
      desc: " you need to go to the market to get  the work done"
    },
    {
      Sno: 2,
      title: "you need to go to the mall",
      desc: " you need to go to the market to get  the work done"
    },
    {
      Sno: 3,
      title: "you need to go to the park",
      desc: " you need to go to the market to get  the work done"
    },
  ]
  return (
   <>
   <Header title="My todo list" searchBar={true}/>
   <Todos todos={todos}/>
   <Footer/>
   </>
  );
}

export default App;
