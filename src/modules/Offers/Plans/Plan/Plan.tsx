import { TMappedOffer, TSum } from "@/modules/Offers/types";
import { formatPrice } from "@/modules/Offers/hooks/helpers";
import Price from "../../../../components/Price/Price";
import { checkIsDisabled, updateOffer } from "./helpers";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import styles from "./Plan.module.scss";

type TProps = {
  sum: TSum;
  currentOffer: TMappedOffer;
  setCurrentOffer: React.Dispatch<React.SetStateAction<TMappedOffer>>;
};

const Plan = ({ currentOffer, setCurrentOffer, sum }: TProps) => {
  const checkboxOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setCurrentOffer((prevOffer) => updateOffer(prevOffer, value, checked));
  };

  return (
    <div className={styles.offer}>
      {currentOffer.prices?.map(({ id, value, isChecked, label }) => (
        <Checkbox
          key={id}
          isDisabled={checkIsDisabled(id, currentOffer)}
          onChange={checkboxOnChange}
          text={formatPrice(value)}
          {...{ id, value, label, isChecked }}
        />
      ))}
      <Price sum={sum} />
    </div>
  );
};

export default Plan;
