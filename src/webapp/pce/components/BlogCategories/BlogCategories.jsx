import React from "react";
import { Link } from "react-router-dom";
import styles from "./BlogCategories.module.scss";
import useHover from "webapp/cmm/utilities/useHover";
import THEME from "webapp/cmm/state/theme";

export default ({ data = [] }) => {
  const list = data.map((item, index) => <ListItem key={index} item={item} />);
  return (
    <div className={styles.categories}>
      <h3 style={{ background: THEME.color }}>Category</h3>
      <ul>{list}</ul>
    </div>
  );
};

const ListItem = ({ item }) => {
  const [ref, isHover] = useHover();
  return (
    <li
      ref={ref}
      key={item.id}
      style={{ background: isHover && "rgb(245,245,245)" }}
    >
      <Link to ={"/place"}>
            {/* to={"/place/cats/" + item.id}> */} 
                                          {/* 카테고리 기능 */}
        <i
          className="las la-long-arrow-alt-right"
          style={{ color: THEME.color }}
        />
        {item.title}
      </Link>
    </li>
  );
};
