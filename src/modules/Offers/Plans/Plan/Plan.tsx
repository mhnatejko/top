import {
  EService,
  TMappedOffer,
  TSelected,
  TSum,
} from "@/modules/Offers/types";
import { formatPrice } from "@/modules/Offers/hooks/helpers";
import Price from "../../../../components/Price/Price";
import { checkIsDisabled, updateCheckedState } from "./helpers";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import styles from "./Plan.module.scss";

type TProps = {
  currentOffer: TMappedOffer;
  selected: TSelected;
  setSelected: React.Dispatch<React.SetStateAction<TSelected>>;
  sum: TSum;
};

const Plan = ({ currentOffer, selected, setSelected, sum }: TProps) => {
  const checkboxOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const newSelectedState = updateCheckedState(value, checked);

    setSelected((prevSelected) => ({ ...prevSelected, ...newSelectedState }));
  };

  return (
    <div className={styles.offer}>
      {currentOffer.prices?.map(({ id, value, isChecked, label }) => (
        <Checkbox
          key={id}
          isDisabled={checkIsDisabled(id, selected)}
          onChange={checkboxOnChange}
          text={formatPrice(value)}
          isChecked={selected[id]}
          {...{
            id,
            value,
            label,
          }}
        />
      ))}
      <Price sum={sum} />
    </div>
  );
};

export default Plan;
