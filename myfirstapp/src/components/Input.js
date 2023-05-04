
const Input = ({type , id , placeholder , labelValue}) => {
  return (
    <div className="form-floating">
                <input type={type} className="form-control" id={id} placeholder={placeholder} />
                <label htmlFor={id}>{labelValue}</label>
    </div>
  )
}

export default Input