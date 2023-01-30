import { useState } from "react";

// import styles from "./UpdateCount.module.css";

enum UpdateAction {
  decrement,
  increment,
}
const UpdateCount: React.FC<{ handleUpdate: (value: number) => any }> = ({
  handleUpdate,
}) => {
  const [value, setValue] = useState<number>(0);

  const handleSubmit = (action: UpdateAction) => {
    if (action === UpdateAction.decrement) {
      handleUpdate(-value);
    } else if (action === UpdateAction.increment) {
      handleUpdate(value);
    } else {
      console.warn("update action not defined");
    }
    setValue(0);
  };

  const handleInputChange = (e: any) => {
    setValue(Number(e?.target?.value));
  };

  return (
    // <div className={styles.updateCount}>
    <div>
      <button onClick={() => handleSubmit(UpdateAction.decrement)}>-</button>
      <input type="number" onChange={handleInputChange} value={value} />
      <button onClick={() => handleSubmit(UpdateAction.increment)}>+</button>
    </div>
  );
};

export default UpdateCount;
