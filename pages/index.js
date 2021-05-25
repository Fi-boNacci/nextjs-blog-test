import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Alert from "react-bootstrap/Alert";

export default function Home() {
  return (
    <div className={styles.container}>
      {[
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ].map((variant, idx) => (
        <Alert key={idx} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </div>
  );
}
