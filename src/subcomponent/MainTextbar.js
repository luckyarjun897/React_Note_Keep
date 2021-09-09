import {useState} from 'react';
import './Main.css';
import Note from './Note';
function MainTextbar(props){
    const [note,setnote]=useState({
        Title : '',
        Content: ''
    })
    const[expand,seExpand]=useState(false)
    const[arr,setarr]=useState([])
  //  const[isset,set]=useState(false)
    const Inputevent=(event)=>{
       const  value=event.target.value;
       const name=event.target.name;
        setnote((prev)=>{
            return {
                ...prev,
                [name]:value}
        })
       
    }
    const addEvent=(event)=>{
        var newdata={
            title:note.Title,
            content:note.Content,
            key:Date.now()
        }
        event.preventDefault()
        if(note.Title!=="" && note.Content!==""){
            setarr([...arr,newdata])
        }    
        setnote({
            Title:'',
            Content:''
        })
        console.log(arr);
    }
   const deleteItem=(key)=>{
       var filtereddata=arr.filter((item)=> item.key!==key)
       setarr(filtereddata)
   }
    return(
        <>

        <div className="main">
            <form>   
                {expand && <input className="inputs" type="text" name="Title" placeholder="Title" value={note.Title} onChange={Inputevent} autoComplete="off"/>}
                <textarea  className="inputs" rows="" column = "" name="Content" placeholder="Write a note..." value={note.Content} onChange={Inputevent} onClick={()=>seExpand(true)}/>
                {expand && <input className="button" type="submit" onClick={addEvent} value="ADD" />}
            </form>
        </div>
        <Note items={arr} delete={deleteItem}/>
                
        </>
    )
}
export default MainTextbar;