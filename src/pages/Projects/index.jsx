import { Section, Title } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import ProjectCard from '../../components/ProjectCard';
import devburgerImg from '../../assets/devburger.png';
import toDoListImg from '../../assets/todolist.png';
import quantoFrisoImg from '../../assets/quantofriso.png';
import conversorImg from '../../assets/conversor.png';
import cafeteriaImg from '../../assets/cafeteria.png';
import previsaoImg from '../../assets/previsaotempo.png';
import emDesenvolvimento from '../../assets/dev.png';


const projects = [
    {
        title: 'Hamburgeria',
        description: 'Aplicação para hamburgueria com área do cliente e administrativa. Feita com React, Node.js, Express, Docker e PostgreSQL.',
        image: emDesenvolvimento,
        link: '/',
        repo: 'https://github.com/thianecw/devburger-api',
    },
    {
        title: 'Pilates Online',
        description: 'Aplicação web pra divulgação de pilates online. Desenvolvido com HTML, React e JavaSript. Método de pagamento feito com API Stripe.',
        image: emDesenvolvimento,
        link: '/',
        repo: 'https://github.com/thianecw/greicypilates',
    },
    {
        title: 'Quanto friso?',
        description: 'Aplicação desenvolvida para utilização no setor textil e que auxilia na medida exata que o tecido precisa ser cortado para utilização, evitando desperdícios. Desenvolvido com HTML, CSS e JavaScript.',
        image: quantoFrisoImg,
        link: 'https://thianecw.github.io/quantofriso/',
        repo: 'https://github.com/thianecw/quantofriso',
    },
    {
        title: 'Conversor de moedas',
        description: 'Aplicativo de conversão de moedas em tempo real, utilizando uma API para taxas atualizadas. Desenvolvido com HTML, CSS e JavaScript, facilita a conversão entre diversas moedas com precisão.',
        image: conversorImg,
        link: 'https://thianecw.github.io/Currency-converter/',
        repo: 'https://github.com/thianecw/Currency-converter',
    },
    {
        title: 'Cafeteria',
        description: 'Website para uma cafeteria, apresentando menu, avaliações de clientes, informações de contato e localização. Criado com HTML e CSS.',
        image: cafeteriaImg,
        link: 'https://thianecw.github.io/Bean-Code/',
        repo: 'https://github.com/thianecw/Bean-Code',
    },
    {
        title: 'To-do list',
        description: 'Ferramenta web para gerenciamento de tarefas, permitindo criar, editar, marcar como concluída e excluir itens de uma lista. Construída com HTML, CSS e JavaScript para uma gestão eficiente de tarefas diárias.',
        image: toDoListImg,
        link: 'https://thianecw.github.io/To-Do-list/',
        repo: 'https://github.com/thianecw/To-Do-list',
    },
    {
        title: 'Previsão do tempo',
        description: 'Aplicativo que fornece a previsão do tempo em tempo real usando API. Desenvolvido com HTML, CSS e JavaScript.',
        image: previsaoImg,
        link: 'https://thianecw.github.io/previsaodotempo/',
        repo: 'https://github.com/thianecw/previsaodotempo',
    },
];

const Projects = () => {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    return (
        <Section id="projects">
            <Title>Projetos</Title>
            <Swiper
                modules={[Navigation, Pagination, FreeMode]}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                pagination={{ clickable: true }}
                spaceBetween={10}
                speed={600}
                freeMode={true}
                freeModeMomentum={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    620: {
                        slidesPerView: 2,
                        spaceBetween: 25,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                onSwiper={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
                onSlideChange={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.title}>
                        <ProjectCard {...project} />
                    </SwiperSlide>
                ))}

                <button
                    type="button"
                    className="swiper-button-prev"
                    style={{ display: isBeginning ? 'none' : 'block' }}
                    aria-label="Previous slide"
                />
                <button
                    type="button"
                    className="swiper-button-next"
                    style={{ display: isEnd ? 'none' : 'block' }}
                    aria-label="Next slide"
                />
            </Swiper>
        </Section>
    );
};

export default Projects;