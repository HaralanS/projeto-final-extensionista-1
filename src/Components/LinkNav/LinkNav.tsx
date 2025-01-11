import Link from 'next/link';
import styles from './LinkNav.module.css'

interface LinkNavProps {
    children: React.ReactNode;
    to: string;
}

export default function LinkNav({children, to}: LinkNavProps) {
    return (
        <>
            <Link className={styles.linkNavModule} href={to}>{children}</Link>
        </>
    )
}