import {ButtonLogin, Container, Options, OptionsMenu} from './styles.js';
import Logotipo from '../../images/LogotipoPrincipal.png';

function Header() {
    const handleClickAnchor = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        };

    return (
        <Container>
            <img src={Logotipo} alt="Logotipo Premier9 Media" />

            <Options>
                <OptionsMenu>
                    <button onClick={() => {handleClickAnchor("home")}}>
                        <h5>Home</h5>
                    </button>
                    <button onClick={() => {handleClickAnchor("services")}}>
                        <h5>Services</h5>
                    </button>
                    {/* <button onClick={() => {handleClickAnchor("section3")}}>
                        <h5>Blog</h5>
                    </button> */}
                    <button onClick={() => {handleClickAnchor("meeting")}}>
                        <h5>Meeting</h5>
                    </button>
                </OptionsMenu>

                <ButtonLogin>
                    <h4>Login</h4>
                </ButtonLogin>
            </Options>
        </Container>
    );
}

export default Header;
