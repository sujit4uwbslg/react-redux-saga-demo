import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buyBook } from "./actions/myactions";
const S1=()=>{
  const sam=useSelector((state)=>state.numOfBook)
  const dispatch=useDispatch()
  function dfg(){
    dispatch(buyBook())
  }
  return(
    <div>
      <h2>{sam}</h2>
      <button onClick={dfg}>Click me</button>
    </div>
  )
}
const S2=()=>{
  const sam=useSelector((state)=>state.sd)
  return(
    <div>
      <h1>The hello saga</h1>
      <h2>{sam}</h2>
    </div>
  )
}
function App() {
  return (
    <div className="App">
     <S1/>
     <S2/>
    </div>
  );
}

export default App;
