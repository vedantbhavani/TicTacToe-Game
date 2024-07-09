
const Square = (props) => {
  return (
    <div
    onClick={props.onClick} 
    className="square">
        <h3>{props.value}</h3>
    </div>
  )
}

export default Square
