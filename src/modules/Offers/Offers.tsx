import { useEffect, useState } from "react";

import { TMappedOffer } from "./types";
import Plans from "./Plans/Plans";
import { getAllOffers } from "@/services/api/getAllOfers";
import styles from "./Offers.module.scss";

const Offers = () => {
  const [data, setData] = useState<TMappedOffer[]>();

  const fetchData = async () => {
    const { data } = await getAllOffers();

    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className={styles.offers}>
      <h1>Oferty</h1>
      <section>
        <p className={styles.p}>wybierz rok i zaznacz usługi</p>
        <div className={styles.content}>
          {data ? <Plans offers={data} /> : <p>proszę czekać...</p>}
        </div>
      </section>
    </main>
  );
};

export default Offers;
