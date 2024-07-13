import React, { useState } from 'react';

const Content = () => {
   
    // function namee() {
    //     return console.log("Visit shimhan.lk")
    // }
    
    // const [count, setCount] = useState(0);
    // const [name, setName] = useState(() => handleName())
    

    // function increment() {
    //     setCount(count + 1);
    // }

    // function decrement() {
    //     if (count > 0) {
    //         setCount(count - 1);
    //     }
    // }
    const [name, setName] = useState('Earn')
    function handleName() {
        const names = ["Earn", "Grow", "Give"];
        const num = Math.floor(Math.random() * names.length);
        setName(names[num]);
    }
    
    
    return (
        <main>
            <p>Let's {name} money</p>
            <button className='but' onClick={handleName}>Subscribe</button>    
        </main>
    );
};

export default Content;
