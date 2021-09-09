import './Main.css'
function Note(props){
    const handleDelete=(key)=>{
        props.delete(key)
    }
    return (
        <>
        <div className="grid-container">
        <ul>
        {
        props.items.map((item)=>{
            return (
                <li key={item.key} className="grid-item">
                    <h5>{item.title}</h5>   
                    <p>{item.content}</p>
                    <form>
                        <input type="submit"  onClick={()=>handleDelete(item.key)} value="DELETE"/>
                    </form> 
                </li>
            )
        })
        } 
        </ul> 
        </div> 
        </>
    )
}
export default Note;