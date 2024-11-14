

const Filter = (props) => {
    return (
      <form>
        <input 
            value={props.value} 
            onChange={props.handle}
        />
      </form>
    )
}

export default Filter