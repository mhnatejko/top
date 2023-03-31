import cn from "classnames";

import styles from "./YearButton.module.scss";

type TProps = { label: string; onClick: () => void; isActive: boolean };

const YearButton = ({ label, onClick, isActive }: TProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(styles.yearButton, isActive && styles.yearButtonActive)}
    >
      <h2>{label}</h2>
    </button>
  );
};

export default YearButton;
