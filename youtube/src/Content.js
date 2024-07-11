import React from 'react'

export const Content = () => {
    function handleName() {
        const num = Math.random() * 10
        if (num > 7) {
            return "Hello everyone"
        }
        else {
            return "how are you"
        }
    }
    
    const handleEvent = (e) => {
        console.log(e.target.innerText)
    }

    const handleEvent1 = (name) => {
        console.log(`Thanks for click button ${name}`)
    }

    return (
      <main>
            <p onDoubleClick={() =>handleEvent1('shimhan')}>{handleName()} How are you</p>
            <button onClick={(e) =>  handleEvent(e) }   className='but'> Hello  </button>
      </main>  
  )
}

export default Content