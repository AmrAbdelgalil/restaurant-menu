import React from "react";

const Menu = ({ menuItems }) => {
  return (
    <article className="section-center">
      {menuItems.map((item) => {
        return (
          <div className="menu-item" key={item.id}>
            <img src={item.img} alt={item.title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{item.title}</h4>
                <div className="price">${item.price}</div>
              </header>
              <p className=".item-text">{item.desc}</p>
            </div>
          </div>
        );
      })}
    </article>
  );
};

export default Menu;
