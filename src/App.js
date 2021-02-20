import React from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/1',
    name: 'yang',
    birthday: '900210',
    gender: 'M',
    job: 'programmer',
  },
  {
    id: 2,
    image: 'https://placeimg.com/64/64/2',
    name: 'ji',
    birthday: '900212',
    gender: 'M',
    job: 'designer',
  },
  {
    id: 3,
    image: 'https://placeimg.com/64/64/3',
    name: 'cheol',
    birthday: '900213',
    gender: 'M',
    job: 'pl',
  },
];

class App extends React.Component {
  render() {
    return (
      <div>
        {customers.map((c) => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
