import styles from './Search.module.scss';

function Auth({ children }) {
    return <div className={styles.wrapper}>{children}</div>;
}

export default Auth;
