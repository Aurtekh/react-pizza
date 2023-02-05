import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://6387b899e399d2e47306f64c.mockapi.io/pizzasItems/${id}`,
        );
        setPizza(data);
      } catch (error) {
        alert('Ошибка при получения пиццы');
        navigate('/');
      }
    }
    fetchPizza();
  }, [id]);

  if (!pizza) {
    return <>Загрузка...</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Вернуться назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;
