import './App.css';
import {useState} from "react" ;
import {useDispatch , useSelector} from "react-redux" ;
import {randomColor } from './Redux/action';

function App() {
  const [inputNumber , setinputNumber] = useState() ;
  const disptach = useDispatch() ;
  const {mainData ,dataAvailable} = useSelector((state) => state.mainData) ;
  const [data , setData] = useState(mainData) ;
  const [toggle , setToggle] = useState(false) ;
  const [emptyArr , setEmptyArr] = useState([]) ;


  if(!dataAvailable){
    disptach(randomColor()) ;
  }
  
  const handleChange = (e) => {
    setinputNumber(e.target.value-1) ;
  }
  const handleShoot = () => {
    let ele = data.splice(inputNumber , 1) ;
    let obj = {id : ele[0].id ,eleColor : ele[0].color} ;
    let arr = [...emptyArr , obj] ;
    setEmptyArr(arr) ;
    setToggle(!toggle) ;
  }
  const handlePushtoMain = (index) => {
    let ele = emptyArr.splice(index , 1) ;
    let obj = {id : ele[0].id ,color : ele[0].eleColor} ;
    data.push(obj) ;
    setData(data.sort((a,b) => a.id - b.id)) ;
    setToggle(!toggle) ;
  }

  return (
    <div className="App">
      <div className="emptyDiv">
        <h4>Empty Div</h4>
        <div style={{marginLeft:"50px"}}>
       {emptyArr.map((el,id) => {
          return(
            <div className="circle" onClick={() => handlePushtoMain(id)} style={{backgroundColor:el.eleColor}} key={id}>
            </div>  
          )})
        }
        </div>
      </div>
      
      <div className="circleDiv">
      <h4> {data.length} Circle </h4>
      {data.map((el,id) => {
        return(
          <div className="circle" style={{backgroundColor:el.color}} key={id}>
          </div> 
        )
      })}
      </div>

      <div className="btnDiv">
        <h4>Button</h4>
        <input type="number" onChange={(e) => handleChange(e)}></input><br/>
        <button onClick={() => handleShoot()}>shoot</button>
      </div>
    </div>
  );
}

export default App;

