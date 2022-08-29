const CardItem = ({id, name, email}) => {
  return (
    <div className="card-list__item" key={id}>
      <img 
        alt={`monster ${name}`} 
        src={`https://robohash.org/${id}?set=set2`}/>
      <h2>{ name }</h2>
      <p>{ email }</p>
    </div>
  );
};

export default CardItem;