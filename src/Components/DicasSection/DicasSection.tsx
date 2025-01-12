import Link from 'next/link'
import styles from './DicasSection.module.css'


export default function DicasSection() {
    return (
        <>
            <section className={styles.dicasSection}>

                <h1>Dicas e Cuidados</h1>

                <p>Proteger a fauna local é uma responsabilidade de todos que visitam ou vivem em São Francisco do Sul. Abaixo, reunimos dicas importantes para garantir que as espécies nativas sejam preservadas e que sua interação com elas seja respeitosa e segura.</p>

                <div className={styles.dicaContainer}>
                    <h2>Observe, mas mantenha a distância</h2>
                    <p>✅ Evite tocar ou se aproximar excessivamente de animais silvestres. Isso pode causar estresse aos animais e até transmitir doenças.</p>
                    <p>✅ Use binóculos ou câmeras com zoom para admirar a fauna sem interferir no comportamento natural das espécies.</p>
                </div>

                <div className={styles.dicaContainer}>
                    <h2>Não alimente os animais</h2>
                    <p>✅ Alimentos humanos podem ser prejudiciais à saúde das espécies nativas e criar dependência.</p>
                    <p>✅ Animais que se acostumam a receber comida de pessoas podem se tornar vulneráveis a predadores e perder habilidades naturais de sobrevivência.</p>
                </div>

                <div className={styles.dicaContainer}>
                    <h2>Respeite os habitats naturais</h2>
                    <p>✅ Evite pisotear ou remover plantas e elementos naturais como conchas e pedras, que podem servir de abrigo ou alimento para os animais.</p>
                    <p>✅ Seja cuidadoso em áreas como manguezais e restingas, que são essenciais para muitas espécies locais.</p>
                </div>

                <div className={styles.dicaContainer}>
                    <h2>Reduza o impacto do lixo</h2>
                    <p>✅ Recolha todo o lixo gerado durante passeios ou visitas às praias. Resíduos como plásticos, bitucas de cigarro e redes de pesca podem ser fatais para a fauna marinha e terrestre.</p>
                    <p>✅ Sempre que possível, participe de ações de limpeza de praias e áreas naturais.</p>
                </div>

                <div className={styles.dicaContainer}>
                    <h2>Evite sons e luzes intensas</h2>
                    <p>✅ Som alto e luzes artificiais podem desorientar animais, especialmente aves e espécies marinhas como tartarugas.</p>
                    <p>✅ Durante a noite, use lanternas com luz vermelha, que têm menor impacto na fauna.</p>
                </div>

                <div className={styles.dicaContainer}>
                    <h2>Informe-se sobre as leis de preservação</h2>
                    <p>✅ Conheça as normas ambientais locais, como proibição de caça, pesca em áreas protegidas e uso de embarcações em áreas de preservação.</p>
                    <p>✅ Denuncie atividades ilegais que prejudiquem a fauna ao órgão ambiental competente.</p>
                </div>

                <div className={styles.dicaContainer}>
                    <h2>Apoie o turismo sustentável</h2>
                    <p>✅ Prefira passeios organizados por empresas que respeitam e promovem práticas sustentáveis.</p>
                    <p>✅ Incentive e valorize iniciativas que promovam a educação ambiental e a conservação da biodiversidade.</p>
                </div>

                <div className={styles.dicaContainer}>
                    <h2>Participe da conscientização</h2>
                    <p>✅ Compartilhe informações sobre a importância da fauna local e incentive amigos e familiares a adotar práticas de preservação.</p>
                    <p>✅ Participe de projetos e campanhas de educação ambiental na região.</p>
                </div>

                <div className={styles.dicaContainer}>
                    <h2>O que fazer ao encontrar um animal ferido</h2>
                    <p>✅ Não tente resgatar o animal por conta própria, pois isso pode agravar a situação.</p>
                    <p>✅ Entre em contato com órgãos ambientais locais, como a Polícia Ambiental ou ONGs especializadas, para que o resgate seja feito de forma adequada.</p>
                </div>

                <p>Cuidar da fauna local é mais do que uma ação ambiental: é garantir que São Francisco do Sul continue sendo um lugar onde a vida selvagem floresce e encanta. Com pequenas atitudes, podemos fazer uma grande diferença!</p>


                <Link className={styles.linkEspecies} href='/especies'>Conheça nossas espécies</Link>

            </section>

        </>
    )
}