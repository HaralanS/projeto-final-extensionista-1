import Link from 'next/link';
import styles from './Header.module.css'

type HeaderProps = {
    children: React.ReactNode;
}

export default function Header({children}: HeaderProps){
    return (<>
        <header className={styles.topo}>
            <Link href="/">
            {/* <h2 className={styles.logoTitle}>Fauna São Chico</h2> */}
            <img src="/coruja-bg.png" alt="" />
            </Link>
            
            {children}

        </header>
    </>)
}