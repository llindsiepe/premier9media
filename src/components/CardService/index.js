import {Container, Content, Title, TextCard, OpenDropDrown} from './styles.js';
import Skip from '../../images/skipOpen.png';

function CardService({icon, title, text}) {
    return (
        <Container>
            <Content>
                <img src={icon} alt="Ícone de carta de baralho" />

                <OpenDropDrown>
                    <Title>{title}</Title>
                    <img src={Skip} alt="Botão com uma seta, indicando a possibilidade de abrir um texto abaixo" />
                </OpenDropDrown>

                <TextCard>{text}</TextCard>
            </Content>
        </Container>
    );
}

export default CardService;
