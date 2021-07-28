import { useState } from "react";
import { Container } from "./styles";

function App() {
  const [list, setList] = useState([]);
  const [undoList, setUndoList] = useState([]);
  const addElement = (e) => {
    e.preventDefault();
    const newValue = prompt("Nuevo valor para la cadena");
    if (newValue) {
      checkPoint();
      setList([
        ...list,
        newValue
      ])
    }
  }
  const deleteElement = (e) => {
    let listCopy = [...list];
    checkPoint();
    listCopy.splice(e.target.value,1);
    setList([...listCopy]);
  }
  const deleteElements = (e) => {
    e.preventDefault();
    const select = document.getElementById('element');
    if (Object.entries(select.selectedOptions).length) {
      checkPoint();
      let listCopy = [...list];
      for (let index = Object.entries(select.selectedOptions).length - 1; index >= 0; index--) {
        listCopy.splice(Object.entries(select.selectedOptions)[index][1].value,1);
      }
      setList([...listCopy]);
    }
  }
  const checkPoint = () => {
    let listCopy = [...undoList];
    listCopy.push([...list]);
    setUndoList([...listCopy]);
  }
  const undoElement = () => {
    let listCopy = [...undoList];
    setList([...listCopy.pop()]);
    setUndoList([...listCopy]);
  }
  return (
    <Container>
      <select id="element" name="element" multiple>
        {list.map((element, index) => (
        <option value={index} key={index} onDoubleClick={(e) => deleteElement(e)}>{element}</option>
        ))}
      </select>
      <div className="buttons">
      <button onClick={(e) => addElement(e)}> + </button>
      <button onClick={(e) => deleteElements(e)}> - </button>
      <button onClick={(e) => undoElement()}> {"<="} </button>
      </div>
    </Container>
  );
}

export default App;
