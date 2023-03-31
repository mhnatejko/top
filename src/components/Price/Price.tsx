import cn from "classnames";

import { TSum } from "@/modules/Offers/types";
import styles from "./Price.module.scss";

type TProps = { sum: TSum };

const Price = ({ sum }: TProps) => {
  const { baseSum, promoSum, promoDescription } = sum;
  const isPromo = !!promoSum;

  return (
    <>
      <div className={styles.priceContainer}>
        <p>
          cena:
          <span className={cn(styles.price, isPromo && styles.priceOld)}>
            {baseSum}
          </span>
        </p>
        {isPromo && <p className={styles.pricePromo}>{promoSum}</p>}
      </div>
      {!!promoDescription && (
        <p className={styles.promoMessage}>{promoDescription}</p>
      )}
    </>
  );
};

export default Price;
