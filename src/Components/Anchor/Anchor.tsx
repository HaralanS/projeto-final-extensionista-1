import styles from './Anchor.module.css'

interface AnchorProps {
    href: string;
    label: string;
}

export default function Anchor({href, label}: AnchorProps) {
    return (
        <>
            <a href={href} className={styles.anchorAtom} target="_blank" rel="noreferrer">{label}</a>
        </>
    )
}