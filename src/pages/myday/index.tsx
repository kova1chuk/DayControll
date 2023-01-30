import styles from "./MyDay.module.css";
import { useState } from "react";
import UpdateCount from "@/components/UpdateCount";

const data = [
  { name: "walk", count: 0, goal: 10 },
  { name: "run", count: 0, goal: 10 },
  { name: "press", count: 0, goal: 10 },
];

export default function Home() {
  const [listData, setListData] = useState(data);

  const updateListCount = (name: string) => (value: number) => {
    setListData(
      listData.map((item) => {
        if (item.name === name) {
          return { ...item, count: (item.count += value) };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <main className={styles.main}>
      <ul className={styles.list}>
        {listData.map((item) => (
          <li key={item.name} className={styles.list}>
            <p>{item.name}</p>
            <UpdateCount handleUpdate={updateListCount(item.name)} />
            <p>{item.count}</p>
            <p>{item.goal}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
