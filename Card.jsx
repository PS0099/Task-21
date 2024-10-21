import styles from "./Card.module.css";

const Card = ({ C }) => {
  return (
    <div className={styles.cardCon}>
      {C.map((card) => (
        <div key={card.id} className={styles.card}>
          <div className={styles.innerDiv}>
            <div className={styles.imgCon}>
              <img src={card.image} alt={card.name} />
            </div>
            <div className={styles.info}>
              <h2>{card.name}</h2>
              <p>{card.description}</p>
            </div>
          </div>
        </div>
        
      ))}
    </div>
  );
};

export default Card;


