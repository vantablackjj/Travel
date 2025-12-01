import Header from './Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';
import Auth from '../../../Auth';
import Login from '../../../Auth/Login';
import Logout from '../../../Auth/Logout';
import { userAuth } from '../../Store/AuthContext.jsx';
function DefaultLayout({ children }) {
    const { openFormLogin, openFormLogOut } = userAuth();

    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.container}>
                <Sidebar />
                <div className={styles.content}>{children}</div>
            </div>
            {(openFormLogin || openFormLogOut) && (
                <Auth>
                    {openFormLogin && <Login />}
                    {openFormLogOut && <Logout />}
                </Auth>
            )}
        </div>
    );
}

export default DefaultLayout;
