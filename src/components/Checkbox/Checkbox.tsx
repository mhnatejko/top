import cn from "classnames";

import styles from "./Checkbox.module.scss";

type TProps = {
  id: string;
  text: string;
  label: string;
  isDisabled?: boolean;
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = ({
  id,
  text,
  label,
  isDisabled = false,
  isChecked,
  onChange,
}: TProps) => (
  <label htmlFor={id} className={styles.label}>
    <input
      id={id}
      value={id}
      checked={isChecked}
      disabled={isDisabled}
      onChange={onChange}
      type="checkbox"
    />
    <div className={cn(styles.text, isDisabled && styles.textDisabled)}>
      <p>{label}</p>
      <span>{text}</span>
    </div>
  </label>
);

export default Checkbox;
