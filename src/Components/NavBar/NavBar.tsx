"use client"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'
import styles from './NavBar.module.css'
import LinkNav from '../LinkNav/LinkNav';

export default function NavBar() {
    const [burger, setBurger] = useState(false)

    
    const toggleMenu = () => {
        setBurger(!burger)
    }

    return (
        <>
            <nav className={styles.navBar}>
                {!burger && <div className={styles.burgerIcon} onClick={toggleMenu}><MenuIcon/></div>}
                {!burger ? <div className={styles.navmodule}>
                    <LinkNav to="/">Home</LinkNav>
                    <LinkNav to="/dicas">Dicas</LinkNav>
                    <LinkNav to="/especies">Especies</LinkNav>
                    <LinkNav to="/contato">Contato</LinkNav>
                    
                </div> :
                <div onClick={toggleMenu} className={styles.navburger}>
                    <LinkNav to="/">Home</LinkNav>
                    <LinkNav to="/dicas">Dicas</LinkNav>
                    <LinkNav to="/especies">Especies</LinkNav>
                    <LinkNav to="/contato">Contato</LinkNav>
                </div>}




            </nav>
        </>
    )
}

