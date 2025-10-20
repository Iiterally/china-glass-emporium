interface CategoryTabsProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const categories = [
  { id: "all", label: "All" },
  { id: "hoodies", label: "Hoodies" },
  { id: "pants", label: "Pants" },
  { id: "sweaters", label: "Sweaters" },
  { id: "jackets", label: "Jackets" },
  { id: "coats", label: "Coats" },
  { id: "shoes", label: "Shoes" },
  { id: "watches", label: "Watches" },
  { id: "backpacks", label: "Backpacks" },
  { id: "hats", label: "Hats" },
];

const CategoryTabs = ({ selectedCategory, setSelectedCategory }: CategoryTabsProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${
            selectedCategory === category.id
              ? "glass-panel bg-primary/20 border-primary text-primary"
              : "glass-panel border-primary/10 hover:border-primary/30 hover:bg-primary/5"
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
