const Card = ({title, date, image, desc}) => {
  // console.log("nedir", props)
  // const {title, date, mage, desc} = props;
  return(
    <div className="cards">
      <div className="title">
        <h1>props.title</h1>

      </div>
      <div className="date">
        <h2>date</h2>
      </div>
      <img src="" alt="" />
      <div className="card-over">
        <p>dexcription</p>

      </div>

    </div>
  )
}

export default Card;