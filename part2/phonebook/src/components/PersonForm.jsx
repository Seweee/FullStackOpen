
const PersonForm = (props) => {
    return (
      <form onSubmit={props.addFunc}>
        <div>
          name: <input 
          value={props.value1} 
          onChange={props.handle1}
        />
        </div>
        <div>
          number: <input 
          value={props.value2} 
          onChange={props.handle2}
        />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm