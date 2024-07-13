import Footer from './Footer';
import Header from './Header'
import './index.css' 
import Todolist from './Todolist';
import './Todolist.css'
import { useState } from 'react'



function App() {
  const [items, setItem] = useState(
    [
      {
        id: 1,
        checked: true,
        item: "Practicing coding"
      },

      {
        id: 2,
        checked: false,
        item: "Playing Cricket"
      },

      {
        id: 3,
        checked: false,
        item: "Sleeping"
      }
    ])

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


  return (
    <div className="App">
      <Header title = "Shimhan University" />
      <Todolist
        items={items}
        setItem={setItem}
        handlecheck={handlecheck}
        Deleteitem = {Deleteitem}
      />
      <Footer
         length = {items.length}
      />
     
    </div>
  );
}

export default App;
