import Head from "next/head";
import styles from "./layout.module.scss";
import utilsStyles from "../styles/utils.module.scss";
import Link from "next/link";

const name = "Leaf Field";
export const siteTitle = "Nextjs Blog";

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/335be8bf-531608.png"
              className={`${utilsStyles.borderCircle}  ${styles.headerHomeImage} ${styles.headerIcon} `}
            />
            <h1 className={utilsStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img
              src="/images/335be8bf-531608.png"
              className={`${utilsStyles.borderCircle} ${styles.headerIcon} `}
            />
            <h1 className={utilsStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>

      {!home && (
        <div>
          <Link href="/">←ホームに戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
