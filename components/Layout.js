import React from 'react'
import styles from '../styles/Layout.module.css';
import { useRouter } from 'next/dist/client/router';
import Wrapper from './Wrapper';
const Layout = ({ children }) => {
    const router = useRouter();
    console.log(router.pathname);

    return <Wrapper>
        {children}
    </Wrapper>

}

export default Layout