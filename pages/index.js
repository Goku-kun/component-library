import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Buttons from "./components/buttons";
export default function Home() {
  return (
    <section>
      <h1>Landing page</h1>
      <Link href="/components/buttons">
        <a>Buttons</a>
      </Link>
    </section>
  );
}
