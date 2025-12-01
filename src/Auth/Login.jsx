import styles from './Login.module.scss';
import { UserAuth } from '../components/Store/AuthContext.jsx';
function Login() {
    const { setOpenFormLogin } = UserAuth();

    return <div className={styles.wrapper}></div>;
}

export default Login;
