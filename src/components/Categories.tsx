import React from 'react';

type CategoriesProps = {
  value: number;
  onClickCategory: (i: number) => void;
};

const categories: string[] = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export const Categories: React.FC<CategoriesProps> = React.memo(({ value, onClickCategory }) => {
  return (
    <div className="categories">
      <ul>
        {categories.map((categoriesName, i) => (
          <li key={i} onClick={() => onClickCategory(i)} className={value === i ? 'active' : ''}>
            {categoriesName}
          </li>
        ))}
      </ul>
    </div>
  );
});
