import { Container, Name } from "./styles";
import Verify from '../../images/verify.png'

export default function CardServices({name, text}) {
    return (
        <Container>
            <h5>{text}</h5>
            <Name>
                <h3>{name}</h3>
                <img src={Verify} alt="Ícone de pessoa verificada" />
            </Name>
        </Container>
    );
}
