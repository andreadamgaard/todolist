import { useState } from "react";

function App() {
  //Vores array
  const [items, setItems] = useState([
    {
      task: "Giv katten mad",
      completed: false,
      id: 1,
    },
  ]);

  function remove(id) {
    //Vores slette funktion. Sletter på id
    setItems((state) => state.filter((item) => item.id !== id));
  }

  function toggle(id) {
    setItems((state) =>
      state.map((item) => {
        if (item.id === id) {
          //hvis id = id, laver den kopi af item og ændre completet fra false til true
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  }

  return (
    //Vi sætter alle vores funktioner direkte på de børn der skal bruge dem.
    //Gør vi hele vejen igennem vores kode.
    <div>
      <Form setItems={setItems} />
      <List remove={remove} toggle={toggle} items={items} />
    </div>
  );
}

function Form({ setItems }) {
  function submit(e) {
    //Så den ikke konstant køre refresh
    e.preventDefault();
    //console.log(e);

    //vi sætter vores form data her
    const formData = new FormData(e.target);
    //Console log tjekker hvilken data vi får på item
    //console.log(formData.get("item"));

    const newItem = {
      //vi skaber den nye item
      task: formData.get("item"),
      completed: false,
      id: Math.random(),
    };
    //Når den nye item er lavet sender vi den tilbage til setItem, som en kopi(concat)
    setItems((state) => state.concat(newItem));
  }
  return (
    <form onSubmit={submit}>
      <input type="text" name="item" />
      <button>Gem</button>
    </form>
  );
}

function List({ items, remove, toggle }) {
  //igen er funktionerne sat på så de taler med parent
  return (
    <div>
      <h2>Her er mine items</h2>
      <ul>
        {items.map((item) => (
          <ListItem toggle={toggle} remove={remove} {...item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function ListItem(props) {
  return (
    //Her er det sat på som prop, men stadigvæk så det taler med parent elementer
    <li>
      {props.task}
      <button onClick={() => props.remove(props.id)}>Slet</button> <button onClick={() => props.toggle(props.id)}>Completed</button>
    </li>
  );
}
export default App;
