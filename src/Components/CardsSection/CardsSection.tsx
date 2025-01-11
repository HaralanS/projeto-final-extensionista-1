"use client"
import { useState } from 'react';
import styles from './CardsSection.module.css'
import Modal from '../Modal/Modal';

export interface Animal {
    id: number;
    nome: string;    
    nomeCientifico: string;
    url: string;
    tipo: string;
    descricao: string;        
}


const lista : Animal[] = [
    {
        id: 1,
        nome: 'Carcará',
        nomeCientifico: 'Caracara plancus',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Schopfkarakara.jpg/1280px-Schopfkarakara.jpg',
        tipo: 'Ave',
        descricao: 'O carcará, caracara-de-crista ou carcará-de-poupa é uma espécie de ave de rapina da Ordem Falconiformes, Família Falconidae. Mede cerca de 50 a 60 cm de comprimento e sua envergadura varia em torno de 123 cm. Habita o centro e o sul da América do Sul.'
    },
    {
        id: 2,
        nome: 'Teiú',
        nomeCientifico: 'Salvator merianae',
        url: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Tei%C3%BA-2.jpg',
        tipo: 'Réptil',
        descricao: 'O gênero de répteis Tupinambis, da família Teiidae, é popularmente conhecido como teiú, tiú, tivaçu, tejuaçu, lagartiu, teju, tegu, jacuraru, jacuaru, jacuruaru, jacruaru e caruaru. Compreende os maiores lagartos do Novo Mundo (podem atingir até 2 metros de comprimento) e abrange sete espécies em dois gêneros, todas nativas da América do Sul.'
    },
    {
        id: 3,
        nome: 'Coruja-buraqueira',
        nomeCientifico: 'Speotyto cunicularia',
        url: 'https://s1.static.brasilescola.uol.com.br/be/2023/03/coruja-buraqueira.jpg',
        tipo: 'Ave',
        descricao: 'A Athene cunicularia ou Speotyto cunicularia, habitualmente conhecida como coruja-buraqueira ou simplesmente buraqueira, é uma ave de rapina americana, da família dos Estrigídeos. É uma coruja terrícola e de hábitos diurnos, embora tende a evitar o calor do meio-dia.'
    },
    {
        id: 4,
        nome: 'Quero-quero',
        nomeCientifico: 'Vanellus chilensis',
        url: 'https://www.avescatarinenses.com.br/imagens/fotos/quero_quero_charadriidae_vanellus_chilensis_teteu_teu_teu_1879.jpg',
        tipo: 'Ave',
        descricao: 'O quero-quero (Brasil) ou abibe-do-sul (Portugal) (nome científico: Vanellus chilensis (Molina, 1782)), também conhecido por tetéu, téu-téu, teréu-teréu e terém-terém, é uma ave da ordem dos Charadriiformes, pertencendo à família dos Charadriidae. Em castelhano é conhecido por tero ou tero-tero, e em inglês como southern lapwing. Ocorre em toda a América do Sul e em alguns pontos da América Central, e sendo uma ave muito popular acabou por fazer parte do folclore de várias regiões.'
    },
    {
        id: 5,
        nome: 'Borrelho-de-coleira-interrompida',
        nomeCientifico: 'Charadrius alexandrinus',
        url: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Charadrius_alexandrinus_%28Kentish_Plover%29%2C_Port_d%27Alc%C3%BAdia%2C_Mallorca.jpg',
        tipo: 'Ave',
        descricao: 'Como o seu nome indica, este borrelho apresenta uma coleira incompleta, que ajuda a identificá-lo tanto na plumagem nupcial (primavera/verão) como na plumagem de inverno. Para além disso, tem uma barra branca nas asas, que é visível em voo, e as suas patas são escuras. Na época de reprodução, os machos apresentam uma coroa acastanhada e uma barra preta na fronte.'
    },
    {
        id: 6,
        nome: 'Tatuíra',
        nomeCientifico: 'Emerita brasiliensis',
        url: 'https://www.portal.zoo.bio.br/IMG/jpg/tatui.jpg',
        tipo: 'Crustáceo',
        descricao: 'Emerita brasiliensis, conhecida pelos nomes comuns de tatuí ou tatuíra, é uma espécie de crustáceo decápode anomuro da família dos hipídeos que habita praias arenosas, fazendo escavações na areia.'
    },
    {
        id: 7,
        nome: 'maria-farinha',
        nomeCientifico: 'Ocypode quadrata',
        url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/6485/large.jpg',
        tipo: 'Crustáceo',
        descricao: 'Ocypode quadrata, popularmente conhecido como papa-defunto, maria-farinha, caranguejo-fantasma, espia-maré, vaza-maré, aguarauçá, guaruçá, grauça e guriçá, é uma espécie de caranguejo da família dos ocipodídeos. Possui carapaça quadrada e coloração branco-amarelada (o que facilita sua camuflagem com o ambiente), sendo encontrado em praias arenosas desde Nova Jérsei, nos Estados Unidos, até o sul do Brasil. Na Região Nordeste do Brasil, recebe a denominação popular local de "maria-farinha", e inclusive no estado de Pernambuco existe uma praia com tal denominação.'
    },
    {
        id: 8,
        nome: 'Siri-pintado',
        nomeCientifico: 'Arenaeus cribrarius',
        url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/313904653/original.jpg',
        tipo: 'Crustáceo',
        descricao: 'Espécie de crustáceo conhecido popularmente como siri chita ou siri-pintado. Possui cor amarelada e toda a sua carapaça é coberta por manchas brancas, presentes também nas patas. Apresenta uma grande distribuição geográfica, ocorrendo ao longo de toda a costa brasileira, chegando até o norte do litoral da Argentina. Podem ser encontrados em praias arenosas e águas rasas, mas também podem ser encontrados em profundidades de até 70 metros.'
    },
    {
        id: 9,
        nome: 'Maniní',
        nomeCientifico: 'Donax hanleyanus',
        url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/147235052/large.jpg',
        tipo: 'Crustáceo',
        descricao: 'Maninís, são moluscos bivalves bem adaptados às praias expostas a ondas e com fundo arenoso, sendo encontrados na zona intertidal (entre-marés). A forma em cunha da concha e o pé bem desenvolvido proporcionam alta mobilidade e agilidade ao se enterrarem. São utilizados como alimento por populações costeiras e, também, como isca para pesca. No Brasil tem sua distribuição entre o Espírito Santo e o Rio Grande do Sul, onde é muito comum, formando colônias com centenas de exemplares. Pode ser encontrado até Necochea , na Argentina.'
    },
    {
        id: 10,
        nome: 'Macaco-prego',
        nomeCientifico: 'Sapajus',
        url: 'https://static.inaturalist.org/photos/7763269/large.jpg',
        tipo: 'Mamífero',
        descricao: 'Sapajus é um gênero de primatas da América do Sul que inclui as espécies de macaco-prego, também chamados micos-de-topete. Os macacos do Novo Mundo do gênero Sapajus pertencem à família Cebidae, subfamíia Cebinae, e são uns dos mais comuns primatas da América do Sul. Outrora, as espécies desse gênero estavam incluídos no gênero Cebus e por muito tempo foram considerados membros de uma única espécie, Cebus apella. A taxonomia dos macacos-prego é confusa e mudou diversas vezes, sendo que o número de espécies variou entre uma única espécie até 12 espécies. Evoluíram, provavelmente, na região da Mata Atlântica e depois povoaram outros habitats, como a Amazônia. O registro fóssil é esparso. Ocorrem na América do Sul, desde regiões amazônicas, até o sul do Paraguai e norte da Argentina e por todo o Brasil. São muito adaptáveis e ocorrem virtualmente em todos os ambientes e tipos de vegetação ao longo de sua distribuição geográfica, desde florestas úmidas até savanas e o semiárido, como a Caatinga, do nível do mar até 2700 m de altitude.'
    },
    {
        id: 11,
        nome: 'Gambá de Orelha Branca',
        nomeCientifico: 'Didelphis albiventris',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Didelphis_albiventris%2C_Bahia%2C_Brazil.jpg/1200px-Didelphis_albiventris%2C_Bahia%2C_Brazil.jpg',
        tipo: 'Mamífero',
        descricao: 'O gambá-de-orelha-branca (Didelphis albiventris), também conhecido como timbu, cassaco, saruê, sariguê micurê e mucura, é uma espécie de gambá nativa na Argentina, Bolívia, Brasil, Paraguai, e Uruguai. É um animal generalista que vive em muitos habitats distintos, podendo apresentar comportamento predominantemente terrestre ou arboreal. Por algum tempo, essa espécie foi classificada junto ao gambá-de-orelha-preta (Didelphis aurita) dentro do táxon Didelphis azarae. Isso levou à descontinuação de azarae como nome de espécie. De 1993 até 2002, essa espécie também incluía o Didelphis imperfecta e o Didelphis pernigra como subespécies.'
    },
    {
        id: 12,
        nome: 'Tatu-galinha',
        nomeCientifico: 'Dasypus novemcinctus',
        url: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Florida-015.jpg',
        tipo: 'Mamífero',
        descricao: 'Tatu-galinha (nome científico: Dasypus novemcinctus), também conhecido como tatu-verdadeiro, tatu-de-folha, tatu-veado, tatu-liso e tatuetê, é um tatu de médio porte encontrado nas Américas do Norte, Central e do Sul, tornando-o o mais comum dos tatus. Seus ancestrais se originaram na América do Sul e permaneceram lá até que a formação do istmo do Panamá permitiu que entrassem na América do Norte como parte do Grande Intercâmbio Americano. É um animal solitário, principalmente noturno, encontrado em muitos tipos de habitats, desde florestas tropicais maduras e secundárias até pastagens e matagais secos. É insetívoro, alimentando-se principalmente de formigas, cupins e outros pequenos invertebrados. Pode pular de 91 a 122 centímetros em linha reta no ar se estiver suficientemente assustado, tornando-se um perigo particular nas estradas. É o pequeno mamífero do estado do Texas.'
    },
    {
        id: 13,
        nome: 'Tartaruga-verde',
        nomeCientifico: 'Chelonia mydas',
        url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/75876185/large.jpg',
        tipo: 'Réptil',
        descricao: 'A tartaruga-verde, tartaruga-aruanã ou só aruanã (nome científico: Chelonia mydas) é uma tartaruga marinha da família dos queloniídeos (Cheloniidae). É o único membro do género Chelonia. A espécie está distribuída por todos os oceanos, nas zonas de águas tropicais e subtropicais e de qualquer altitude do mundo, sendo habitualmente encontradas em águas costeiras, ilhas ou baías, e raramente encontradas em alto-mar, com duas populações distintas no Oceano Atlântico e no Oceano Pacífico. O nome tartaruga-verde deve-se à coloração esverdeada da sua gordura corporal.'
    },
    {
        id: 14,
        nome: 'Jararaca',
        nomeCientifico: 'Bothrops jararaca',
        url: 'https://catve.com/images/2023/11/07/1699382703654a85af2f29a.jpg',
        tipo: 'Réptil',
        descricao: 'A jararaca-da-mata (nome científico: Bothrops jararaca) é uma serpente de até 1,6 m, encontrada no Brasil (da Bahia ao Rio Grande do Sul) e em regiões adjacentes no Paraguai e Argentina. Origina -se do tupi yara raka.'
    },
    {
        id: 15,
        nome: 'Pilrito-das-praias',
        nomeCientifico: 'Calidris alba',
        url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/212109022/original.jpeg',
        tipo: 'Ave',
        descricao: 'Pilrito-das-praias ou maçarico-branco (Calidris alba) é uma pequena ave limícola pertencente à ordem Charadriiformes e à família Scolopacidae. É uma das aves mais características das praias portuguesas, podendo habitualmente ser visto em pequenos bandos a correr para trás e para a frente, junto à rebentação. Ocorre em Portugal durante o Outono e o Inverno. É uma ave que migra grandes distâncias, viajando entre 4 800 a 16 000 km de um terreno fértil para os seus sítios de invernada. É a ave que viaja mais, e também chega mais tarde e sai mais cedo. Costuma chegar na América do Sul a partir do fim de agosto ao começo de setembro, voando de volta à América do Norte a partir do fim de março até o começo de abril. Chega aos locais de reprodução por volta do fim de maio ao meio de junho, onde fica até o meio de julho e o meio de agosto, retornando para a América do Sul.'
    },
    {
        id: 16,
        nome: 'Gaivota',
        nomeCientifico: 'Larinae',
        url: 'https://s3.amazonaws.com/media.wikiaves.com.br/images/6603/3066041_60f4b40fb1e6baf366b4d90544ffaf3f.jpg',
        tipo: 'Ave',
        descricao: 'As gaivotas são aves marinhas da família dos Larídeos e sub-ordem Lari. A maior parte das gaivotas pertence ao grande género Larus. São próximas das gaivinas e estão mais distantes das limícolas, airos e rabos-de-palha.'
    }
]



export default function CardSection() {
    const [filtroLista, setFiltroLista] = useState<string>("todos")
    const [modalOn, setModalOn] = useState(false)
    const [animalSelecionado, setAnimalSelecionado] = useState<Animal>(lista[0])

    const listaFiltrada: Animal[] = filtroLista === "todos" ? lista : lista.filter((animal) => animal.tipo == filtroLista)

    const setFiltro = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setFiltroLista(e.target.value);
    }

    const setAnimalModal = (animalS: Animal) => {
        setModalOn(true)
        setAnimalSelecionado(animalS)
    }

    return (
        <>
            <section className={styles.cardSection}>

                <h1>Espécies</h1>
                <p>Explore a diversidade incrível da fauna de São Francisco do Sul! Aqui você encontrará uma coleção de espécies fascinantes, organizadas em categorias como crustáceos, aves, mamíferos, répteis e muito mais.</p>
                <p>Clique nos cards para descobrir detalhes sobre cada animal, sua importância para o ecossistema e curiosidades que vão surpreender você. Use os filtros para explorar facilmente os diferentes grupos e mergulhe na riqueza natural que faz do nosso litoral um lugar único.</p>
                <select onChange={setFiltro}>
                    <option value="todos">Todos</option>
                    <option value="Ave">Aves</option>
                    <option value="Réptil">Répteis</option>
                    <option value="Crustáceo">Crustáceos</option>
                    <option value="Mamífero">Mamíferos</option>
                </select>

                <div className={styles.cardsContainer}>
                    {listaFiltrada.map((animal) => (
                        <div key={animal.id} onClick={() => setAnimalModal(animal)} className={styles.cardStyle}>
                            <h3>{animal.nome}</h3>
                            <img src={animal.url} alt={`Imagem de ${animal.nome}`} />
                            <h4 className={styles.nomeCientifico}>{animal.nomeCientifico}</h4>
                            <h5 className={styles.tipo}>{animal.tipo}</h5>
                            {/* <p>{animal.descricao}</p> */}
                        </div>
                    ))}
                </div>
            </section>

            {modalOn ? <Modal animal={animalSelecionado} setModal={setModalOn}/> : null}

        </>
    )
}