import styles from "../LegalNotice/LegalNotice.module.scss";

const LegalNotice = () => {
  return (
    <div className={styles.legalNotice}>
      <h2 className={styles.subtitle}>Legal Notice</h2>

      <div className={styles.description}>
        <h3>Awesome CL</h3>
        <p>Vulkanstraße 1</p>
        <p>10367 Berlin</p>
        <p>Germany</p>
        <h3>Represented by & Responsible for Content:</h3>
        <p>
          Anna Dobrucki, Heriberto Santana Solsona, Iryna Kononova, Kristin
          Stoecker, Nancy Koenitzer, Nathalie Mella
        </p>

        <h3>Contact Information</h3>
        <p>Email: awesomeCL@protonmail.com </p>
        <p>Phone: +49 234 567 890</p>
        <br />
        <p>
          This Legal Notice complies with the German laws under § 5 DDG and § 55
          RStV.
        </p>
      </div>
    </div>
  );
};

export default LegalNotice;
