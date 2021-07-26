import React from "react";

function CategoryFilter({categories, setFilterBy, selectedCat}) {


function handleFilterClick(e){
  setFilterBy(e.target.value)
}

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
          const className = (category === selectedCat) ? "selected" : null;
        return (
          <button key={category} value={category} className ={className} onClick={handleFilterClick}>{category}</button>
        )
      })

      }
      
    </div>
  );
}

export default CategoryFilter;
