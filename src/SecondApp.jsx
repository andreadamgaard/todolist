import "./App.css";
import { useState } from "react";
/*setFrameworks((state) => {
      //mappe
      return state.map((item) => {
        //find det rigtige item
        if (item.id === id) {
          //lave kopi
          const newItem = { ...item };
          newItem.subscribed = !newItem.subscribed;
          return newItem;
        }
        return item;
      });
    });*/
function App() {
  const [frameworks, setFrameworks] = useState([
    {
      name: "Svelte",
      id: 876,
      subscribed: false,
    },
    {
      name: "Vue",
      id: 8761,
      subscribed: true,
    },
    {
      name: "Solid",
      id: 8762,
      subscribed: false,
    },
  ]);
  function remove(id) {
    setFrameworks((state) => state.filter((fw) => fw.id !== id));
  }
  function addFramework() {
    setFrameworks((prev) =>
      prev.concat({
        name: "Astro",
        id: 123456789,
        subscribed: false,
      })
    );
  }
  function subscribe(id) {
    //subscribe
    //fange state
    setFrameworks((state) =>
      state.map((item) => {
        if (item.id === id) {
          //lave kopi
          return { ...item, subscribed: !item.subscribed };
        }
        return item;
      })
    );
  }
  return (
    <ul>
      <li>
        <button onClick={addFramework}>Tilføj Astro</button>
      </li>
      {frameworks.map((fw) => {
        return (
          <li key={fw.id} className={fw.subscribed ? "subscribed" : null}>
            <button onClick={() => subscribe(fw.id)}>Abonnér</button>
            <button onClick={() => remove(fw.id)}>Slet</button> {fw.name}
          </li>
        );
      })}
    </ul>
  );
}

export default App;
