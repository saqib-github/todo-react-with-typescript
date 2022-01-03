import React, { useState } from "react";
import List from "./components/List";
import AddToList from "./components/AddToList"

import "./App.css";
export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}
function App() {
  // const [number, setNumber] = useState<number>(7);
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "John",
      url: "https://www.slazzer.com/static/images/home-page/banner-orignal-image.jpg",
      age: 23,
      note: "dsvsv",
    },
    {
      name: "John",
      url: "https://www.slazzer.com/static/images/home-page/zero-stress.jpg",
      age: 23,
      note: "dsvsv",
    },
  ]);
  return (
    <div className="App">
      <h1>People invited to our party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
