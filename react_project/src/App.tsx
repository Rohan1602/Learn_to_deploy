import './App.css';
import React, { useEffect, useState } from "react";

export default function App (){
  const [list, setList] = useState(["Cricket", "badminton","hockey","football","table-tennis","carrom"]);
  const [listobject, setListObject] = useState([{
    name:'',
    checked:false
  }]);
  useEffect(() => {
    let newVal = createListObjects();
    setListObject(newVal);
    
  },[]);
  const createListObjects = () => {
    const newList = [];
    for (let index = 0; index < list.length; index++) {
      let obj = { name: list[index], checked:false};
      newList.push(obj);
    }
    return newList
  }
  const handleCheckBox = (e: any, i: number) => {
    if (e.target.checked === true) {
      listobject[i].checked = true;
    }  else {
      listobject[i].checked = false;
    }
    setListObject([...listobject]);
  }
  return (
  <>
      <ul>
        {
          listobject && listobject.map((val, i) => {
          return (
            <div key = {i} style={{display:"flex",gap:"2rem"}}>
            <input type='checkbox' onClick={(e) => handleCheckBox(e, i)}/>
            <li style={{listStyle: "none"}}> {val.name}</li>
            {val.checked && (
              <button> delete</button>
            )}
            </div>
          )
          })
        }
      </ul>


  </>
 )
}