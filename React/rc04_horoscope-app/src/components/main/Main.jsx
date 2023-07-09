import {data} from "../../helpers/data";
import Card from "./Card";
const Main = () => {
  return(
    <div className="card-container">
      {data.map(()=> (
      <Card {...item}/>
      ))}
    </div>
  )
}

export default Main;