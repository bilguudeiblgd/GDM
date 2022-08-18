import React from 'react'
import styles from '../styles/Layout.module.css';
import { useRouter } from 'next/dist/client/router';
import Wrapper from './Wrapper';
const Layout = ({ children }) => {
    const router = useRouter();
    console.log(router.pathname);
    if(router.pathname == "/spectate") {
        return <Wrapper>
            {children}
        </Wrapper>
    }
    return (
        <div className={styles.background}>
            {children}
        </div>
    )
}

export default Layout