import Footer from './Footer';
import Header from './Header'
import './index.css' 
import Todolist from './Todolist';
import './Todolist.css'
import { useState } from 'react'
import Addlist from './Addlist';
import Searchitem from './Searchitem';



function App() {
  const [items, setItem] = useState(JSON.parse(localStorage.getItem("todo_list")))

  const handlecheck = (id) => {
    const listItems = items.map((tem) =>
      tem.id === id ? { ...tem, checked: !tem.checked } : tem)
    setItem(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
  }

  const Deleteitem = (id) => {
    const deleteItem = items.filter((tem) =>
      tem.id !== id
    )
    setItem(deleteItem)
    localStorage.setItem("todo_list", JSON.stringify(deleteItem))
  }
  
  const handlesubmit = (e) => {
    e.preventDefault()
    if (!newState) return
    console.log(newState)
    Additem(newState) 
    setnewState('')
  }

  const [newState, setnewState] = useState('')
  const [search,setSearch] = useState('')
  
  const Additem = (item) => {
    const id = items.length ? items[items.length-1].id + 1 : 1
    const addnewItem = { id, checked: false, item }
    const listItems = [...items, addnewItem]
    setItem(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
  }

  return (
    <div className="App">
      <Header title="Shimhan University" />
      <Addlist
        handlesubmit={handlesubmit}
        newState={newState}
        setnewState = {setnewState}
      />
      <Searchitem
         search = {search}
         setSearch = {setSearch}
      />
      <Todolist
        items={items.filter(item => (item.item.toLowerCase()).includes(search.toLowerCase()))}
        setItem={setItem}
        handlecheck={handlecheck}
        Deleteitem={Deleteitem}
      />

      <Footer
         length = {items.length}
      />
     
    </div>
  );
}

export default App;
