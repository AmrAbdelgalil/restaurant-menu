import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const categoriesMenu = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(categoriesMenu);

  function filterItems(category) {
    if (category === "all") {
      setMenuItems(items);
    } else {
      const newItems = items.filter((item) => {
        if (item.category === category) {
          return item;
        }
      });
      setMenuItems(newItems);
    }
  }

  return (
    <main className="menu">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories filterItems={filterItems} categories={categories} />
      <Menu menuItems={menuItems} />
    </main>
  );
}

export default App;
