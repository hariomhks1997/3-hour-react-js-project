import React,{useEffect,useState}from 'react'

const FoodItem = (item) => {
    const deletehandler=()=>{
        user.delete(user.a)
        localStorage.removeItem(user.a)
    }
    const [user, setuser] = useState("")
    const [content, setcontent] = useState()
    useEffect(()=>{
        if(item.item==="food"){
         setuser(item)
         setcontent(<li style={{listStyle:"none"}} > <h1 style={{display:"none"}}>{user.a}</h1>{user.id} {user.name} {user.price} <button onClick={deletehandler}>Delete</button> </li>)
        }
        // eslint-disable-next-line
     },[item,user.id,user.name,user.price,user.a])
    
  return (
    <div>

{content}
    
    </div>
  )
}

export default FoodItem