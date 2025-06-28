import styles from './Home.module.css';

export  function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Welcome to MySocial 👋</h1>
      <p className={styles.subtitle}>
        Your place to connect, share and discover people around you.
      </p>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>🌍 Discover</h3>
          <p className={styles.cardText}>Find users, see profiles, and explore the community.</p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>💬 Chat</h3>
          <p className={styles.cardText}>Connect with friends and new people with one click.</p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>🔒 Secure</h3>
          <p className={styles.cardText}>We care about your privacy and data safety.</p>
        </div>
      </div>
    </div>
  );
}
