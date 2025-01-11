import Link from 'next/link'
import styles from './HomeSection.module.css'


export default function HomeSection() {
    return (
        <>
            <section className={styles.homeSection}>

                <h1>Fauna São Chico</h1>

                <p>São Francisco do Sul, a cidade mais antiga de Santa Catarina, é um verdadeiro tesouro natural. Suas praias, manguezais e áreas preservadas abrigam uma rica e diversa fauna, composta por espécies fascinantes que encantam moradores e visitantes. Este site foi criado para levar até você a magia da vida selvagem local, destacando sua importância, os cuidados necessários para preservá-la e como ela pode ser um atrativo único para o turismo sustentável.</p>

                <p>Nosso objetivo é conscientizar sobre o papel vital dessa biodiversidade, que vai muito além da beleza: ela é essencial para o equilíbrio do ecossistema e a qualidade de vida de todos nós. Aqui, você encontrará informações sobre as espécies que habitam nossas águas, areias e florestas, dicas de como respeitar e proteger esses animais, e inspiração para explorar São Francisco do Sul de forma responsável.</p>

                <p>Descubra a riqueza da fauna local, encante-se com suas histórias e faça parte dessa missão de preservação. Juntos, podemos garantir que as futuras gerações continuem a se maravilhar com esse patrimônio natural único!</p>

                <p>Seja bem-vindo e mergulhe nesse universo de vida e cores que só o litoral de São Francisco do Sul pode oferecer!</p>

                <Link className={styles.linkEspecies} href='/especies'>Conheça nossas espécies</Link>

            </section>

        </>
    )
}