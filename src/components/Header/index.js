import {ButtonLogin, Container, Options, OptionsMenu} from './styles.js';
import Logotipo from '../../images/LogotipoPrincipal.png';

function Header() {
    return (
        <Container>
            <img src={Logotipo} alt="Logotipo Premier9 Media" />

            <Options>
                <OptionsMenu>
                    <button>
                        <h5>Home</h5>
                    </button>
                    <button>
                        <h5>Services</h5>
                    </button>
                    <button>
                        <h5>Blog</h5>
                    </button>
                    <button>
                        <h5>Contact Us</h5>
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
