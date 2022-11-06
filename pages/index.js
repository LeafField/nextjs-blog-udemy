import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import utilStyle from "../styles/utils.module.scss";

export default function Home() {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>私はエンジニア志望の卵です、どこか拾ってくれる会社ないかなあ？</p>
      </section>

      <section>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <p className={utilStyle.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </p>
            </Link>
            <br />
            <small className={utilStyle.lightText}>Febrary 32,2022</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <p className={utilStyle.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </p>
            </Link>
            <br />
            <small className={utilStyle.lightText}>Febrary 32,2022</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <p className={utilStyle.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </p>
            </Link>
            <br />
            <small className={utilStyle.lightText}>Febrary 32,2022</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <p className={utilStyle.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </p>
            </Link>
            <br />
            <small className={utilStyle.lightText}>Febrary 32,2022</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
