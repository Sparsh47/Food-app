import ListItem from "./ListItem";
import styles from "./list.module.css";
import { data } from "./listData";

const List = () => {
  return (
    <div className={styles.container}>
      <p>
        <p>
          RESTAURANTS TO <span className={styles.color}>EXPLORE</span>
        </p>
        <div className={styles.listItem}>
          {data.map((item, index) => (
            <ListItem
              key={index}
              name={item.name}
              time={item.time}
              desc={item.desc}
              rating={item.rating}
              distance={item.distance}
              image={item.image}
            />
          ))}
        </div>
      </p>
    </div>
  );
};

export default List;
