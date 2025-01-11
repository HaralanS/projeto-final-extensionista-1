import { Animal } from '../CardsSection/CardsSection';
import styles from './Modal.module.css'

interface ModalProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    animal: Animal;
}

export default function Modal({setModal, animal}: ModalProps) {

    return(
        <>
            <div className={styles.backgroundDiv} onClick={() => setModal(false)}>
            </div>
            <div className={styles.modalStyle}>
                <h3>{animal.nome}</h3>
                <img src={animal.url} alt={`Imagem de ${animal.nome}`} />
                <h4>{animal.nomeCientifico}</h4>
                <h5>{animal.tipo}</h5>
                <p>{animal.descricao}</p>
            </div>
        </>
    )
}