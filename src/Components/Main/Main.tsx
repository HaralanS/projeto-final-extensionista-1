import styles from './Main.module.css'

type MainProps = {
    children: React.ReactNode;
}

export default function Main({children}: MainProps) {
    return (
        <>
            <main className={styles.mainMolecule}>
                
                {children}

            </main>

        </>
    )
}