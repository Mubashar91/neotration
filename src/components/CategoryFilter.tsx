import { Button } from "@/components/ui/button";

interface Category {
  name: string;
  slug: string;
  description: string;
}

interface CategoryFilterProps {
  categories: readonly Category[];
  activeCategory: string;
  onCategoryChange: (slug: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8">
      {categories.map((category) => (
        <Button
          key={category.slug}
          onClick={() => onCategoryChange(category.slug)}
          variant={activeCategory === category.slug ? "default" : "outline"}
          className={`
            font-lato font-semibold transition-all
            ${activeCategory === category.slug 
              ? 'bg-gradient-hero text-white shadow-card' 
              : 'border-2 hover:border-primary'
            }
          `}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
