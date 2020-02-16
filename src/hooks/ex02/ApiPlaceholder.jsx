import React, { useState, useEffect } from "react";
import ApiItems from "./ApiItems";
import './clean.css';

export default function ApiPlaceholder() {
     const [body, setBody] = useState([]);

     const apiTest = async () => {
          const response = await fetch("https://jsonplaceholder.typicode.com/posts");
          const data = await response.json();
          setBody(data);
          console.log(data)

     }
     useEffect(() => {
          apiTest();
     }, []);

     return (
          <div className="bordas">
               <ApiItems item={body}/>
          </div>
     );
}
