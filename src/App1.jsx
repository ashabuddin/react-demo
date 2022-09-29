import React from "react";

const tasksList = [
  {
    id: 1,
    title: "Checkbox 1",
    checked: false,
  },
  {
    id: 2,
    title: "Checkbox 2",
    checked: true,
  },
  {
    id: 3,
    title: "Checkbox 3",
    checked: false,
  },
  {
    id: 4,
    title: "Checkbox 4",
    checked: false,
  },
  {
    id: 5,
    title: "Checkbox 5",
    checked: true,
  },
  {
    id: 6,
    title: "Checkbox 6",
    checked: false,
  },
];

const ListItem = (props) => (
  <li
    style={{
      listStyle: "none",
      display: "flex",
      alignItems: "center",
    }}
  >
    <input type="checkbox" checked={props.checked} />
    <p>
      {props.title}
      <span>{props.children}</span>
    </p>
    <button style={{ "margin-left": "auto" }}>Delete</button>
  </li>
);

const App1 = () => {
  return (
    <div>
      <ul>
        {tasksList.map((item) => (
          <ListItem key={item.id} title={item.title} checked={item.checked}>
            <button>Edit</button>
          </ListItem>
        ))}
      </ul>
    </div>
  );
};

export default App1;
