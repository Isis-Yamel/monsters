import './cardList.css';

import CardItem from './cardItem';

const CardList = ({ monsters }) => {
  return (
    <div className="card-list__container">
      {monsters.map((monster) => {
        const { name, email, id } = monster;

        return <CardItem id={id} name={name} email={email} />
      })}
    </div>
  );
};

export default CardList;