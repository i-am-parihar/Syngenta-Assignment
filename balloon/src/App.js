import './App.css';
import {useEffect, useState} from "react" ;
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
  //  console.log(e.target.value) ;
   setinputNumber(e.target.value-1) ;
  //  var str = e.target.value ;
  //  if(str.length>1){
  //    alert("Please Enter Valid Number !") ;
  //    return ;
  //  }
  //  if(Number(str[0])>5){
  //    alert("Please Enter Valid Number !") ;
  //    return ;
  //  }
  }
  const handleShoot = () => {
    let ele = data.splice(inputNumber , 1) ;
    let obj = {
      id : ele[0].id ,
      eleColor : ele[0].color ,
    }
    console.log(ele) ;
    console.log(obj) ;
    let arr = [...emptyArr , obj] ;
    setEmptyArr(arr) ;
    // emptyArr.push(obj) ;
    setToggle(!toggle) ;
  }
  const handlePushtoMain = (index) => {
    let ele = emptyArr.splice(index , 1) ;
    let obj = {
      id : ele[0].id ,
      color : ele[0].eleColor ,
    }
    console.log("obj" , obj) 
    console.log("ele" , ele) 
    data.push(obj) ;
    setData(data.sort((a,b) => a.id - b.id)) ;
  //  setData(demo) ;
    setToggle(!toggle) ;
  }
// console.log("dataOuter" ,data) ;
// console.log("emptyArr" , emptyArr)
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
        <input onChange={(e) => handleChange(e)}></input><br/>
        <button onClick={() => handleShoot()}>shoot</button>
      </div>
    </div>
  );
}

export default App;

