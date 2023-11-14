import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("")
  
  //Define a function to handle the change event of the <select> element
  const handleCategoryChange = (event) => {
    // Update the state with the selected value
    setSelectedCategory(event.target.value);
  };
     // Use the selectedCategory to filter the items array
  const filteredItems = selectedCategory
  ? items.filter((item) => item.category === selectedCategory)
  : items;


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" id="categorySelect" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
