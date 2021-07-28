import { useState } from "react";
import { Container } from "./styles";

function App() {
  const [list, setList] = useState([]);
  const addElement = (e) => {
    e.preventDefault();
    const newValue = prompt("Nuevo valor para la cadena");
    if (newValue) {
      setList([
        ...list,
        newValue
      ])
    }
  }
  const deleteElement = (e) => {
    e.preventDefault();
    let listCopy = [...list];
    const select = document.getElementById('element');
    if (Object.entries(select.selectedOptions).length) {
      for (let index = Object.entries(select.selectedOptions).length - 1; index >= 0; index--) {
        listCopy.splice(Object.entries(select.selectedOptions)[index][1].value,1);
      }
      setList([...listCopy]);
    }
  }
  return (
    <Container>
      <select id="element" name="element" multiple>
        {list.map((element, index) => (<option value={index} key={index}>{element}</option>))}
      </select>
      <div classname="buttons">
      <button onClick={(e) => addElement(e)}> + </button>
      <button onClick={(e) => deleteElement(e)}> - </button>
      </div>
    </Container>
  );
}

export default App;
