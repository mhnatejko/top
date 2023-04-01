import useOffers from "../hooks/useOffers";
import { TMappedOffer } from "../types";
import styles from "./Plans.module.scss";
import YearButton from "@/components/YearButton/YearButton";
import Plan from "@/modules/Offers/Plans/Plan/Plan";

type TProps = { offers: TMappedOffer[] };

const Plans = ({ offers }: TProps) => {
  const {
    currentYearId,
    setCurrentYearId,
    currentOffer,
    selected,
    setSelected,
    sum,
  } = useOffers(offers);

  const handleOnYearButtonClick = (id: string) => () => setCurrentYearId(id);

  return (
    <div className={styles.plans}>
      <div className={styles.buttons}>
        {offers.map(({ id, year }) => (
          <YearButton
            key={id}
            label={year}
            onClick={handleOnYearButtonClick(id)}
            isActive={id === currentYearId}
          />
        ))}
      </div>
      {currentOffer && (
        <Plan {...{ currentOffer, selected, setSelected, sum }} />
      )}
    </div>
  );
};

export default Plans;
