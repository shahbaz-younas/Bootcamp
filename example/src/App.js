
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [books, setbooks] = useState([]);
  useEffect(() => {
    setInterval(() => {
      fetch("/api/books")
        .then(res => res.json())
        .then(data => {
          setbooks(data)
        })
    }, 2000)
  }, [])
  const addbook=()=>{
   const author=prompt("enter the author name");
    const title=prompt("enter the title");
    fetch("/api/add",{method:"POST",body:JSON.stringify({author,title})})
  }
  if(!books){
    <h1>loadin....</h1>
  }
  return (
    <div className="App">
     <table border="1"width="200">
       <thead>
         <th>
           title
         </th>
         <th>
           author
         </th>
       </thead>
        <tbody>
       {books.map((bookobj,ind)=>{
         return(<tr key={ind}>
           <td>{bookobj.title}</td>
             <td>{bookobj.author}</td>
          
         </tr>)
       })}
       </tbody>
     </table>
     <button onClick={addbook}width="50">addbook</button>
    </div>
  );
}

export default App;
