import "./CategoryFilter.css";

function CategoryFilter({ onFilter }) {

  const categories = [
    "Todos",
    "Personal Trainer",
    "Yoga",
    "Pilates",
    "Nutrição"
  ];

  return (

    <div className="categories">

      {
        categories.map((category) => (

          <button
            key={category}

            onClick={() => onFilter(category)}
          >
            {category}
          </button>

        ))
      }

    </div>

  );
}

export default CategoryFilter;