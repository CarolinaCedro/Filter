import React, { useState } from 'react';
import vegetables from '../Assets/vegetables.png';
import './styles.css';

export default function Filter() {
  const fruits = [
    'Banana',
    'Maça',
    'Abacaxi',
    'Abacate',
    'Amora',
    'banana',
    'bacuri',
    'buriti',
    'caju',
    'carambola',
    'cacau',
    'damasco',
    'durião',
    'embaúba',
    'figo',
    'framboesa',
    'goiaba',
    'graviola',
    'groselha',
    'heisteria',
    'ingá',
    'jambo',
    'jabuticaba',
    'kiwi',
    'laranja',
    'limão',
    'lichia',
    'mamão',
    'melancia',
    'marmelo',
    'nectarina',
    'nêspera',
    'olho-de-boi',
    'pera',
    'pêssego',
    'physalis',
    'quina',
    'romã',
    'seriguela',
    'sapoti',
    'tâmara',
    'tamarindo',
    'tangerina',
    'umbu',
    'uva',
    'veludo',
    'wampee',
    'xixá',
    'yamamomo',
    'zimbro',
  ];

  const [search, setSearch] = useState('');

  const frutasFiltradas = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="Container">
      <div className="search">
        <div className="teste">
          <span lang="en" id="sale">
            Lista de Frutas
          </span>
          <img className="fruitsImg" src={vegetables} alt="" />
        </div>

        <div className="input-group">
          <label htmlFor="search">Pesquisar por frutas</label>
          <input
            id="search"
            value={search}
            type="text"
            placeholder="ex: banana"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="list">
        {frutasFiltradas.map((fruit) => {
          return (
            <div className="result">
              <h4 key={fruit}>{fruit}</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
}
