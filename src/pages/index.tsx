import Head from "next/head";
import Link from "next/link";
import { EPath } from "@/consts/paths";

export default function Home() {
  return (
    <>
      <Head>
        <title>Firma telekomunikacyjna</title>
      </Head>
      <main>
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link
            href={EPath.Offers}
            style={{
              background: "#333",
              color: "#fff",
              width: "max-content",
              padding: "1rem",
              borderRadius: "6rem",
            }}
          >
            Sprawdź dostępne oferty
          </Link>
        </div>
      </main>
    </>
  );
}
