import {AboutUs, BannerHome, ButtonPrimary, Buttons, ButtonSecondary, Card, Chip, Container, Icon, ImageBannerHome, ImageMockup, Label, Section, TextAbout, TextCard, TopicAbout, Value} from './styles.js';
import Header from './components/Header';
import Skip from './images/skip.png';
import ImageMockup001 from './images/imageMockup001.png';
import iconOne from './images/iconOne.png';
import iconTwo from './images/iconTwo.png';
import iconThree from './images/iconThree.png';
import ChipImage from './images/chip.png'
import ImageMockup002 from './images/mockup002.png';
import skipTopic from './images/skipTopic.png';


function App() {
  return (
    <Container>
      <Header />
      
      <BannerHome>
        <h1>Unlock Winning Opportunities <br />with <b>Premier 9 Media.</b></h1>
        <h5>LET’S TALK STRATEGY.</h5>

        <Buttons>
            <ButtonPrimary>
              <h6>Schedule a meeting</h6>
              <img src={Skip} alt="Seta apontando para o botão" />
            </ButtonPrimary>

            <ButtonSecondary>
              <h6>Contact us</h6>
            </ButtonSecondary>
        </Buttons>

        <ImageBannerHome src= {ImageMockup001} alt= "Dashboard da plataforma Premier9Media com barra lateral de menu, cartões de estatísticas de campanhas e uma tabela detalhando informações de pedidos. Inclui indicadores de tráfego, classificação de domínio e ações relacionadas às campanhas." />
      </BannerHome>

      <Section>
        <Card>
          <Icon src={iconOne} alt="Ícone de baralho" />
          <TextCard>
            <Value>
              30K<span>+</span>
            </Value>
            <Label>Domains Connected</Label>
          </TextCard>
        </Card>
        <Card>
          <Icon src={iconTwo} alt="Ícone de baralho" />
          <TextCard>
            <Value>
              50K<span>+</span>
            </Value>
            <Label>Traffic Generated</Label>
          </TextCard>
        </Card>
        <Card>
          <Icon src={iconThree} alt="Ícone de baralho" />
          <TextCard>
            <Value>
              8K<span>+</span>
            </Value>
            <Label>Content Pieces Delivered</Label>
          </TextCard>
        </Card>
      </Section>
      
      <Chip src={ChipImage} alt="Ilustração de moeda de Poker"/>

      <AboutUs>
        <ImageMockup src={ImageMockup002} alt="Interface de gerenciamento de campanhas mostrando uma tabela com ID, nome da campanha, domínio, idioma e um calendário" />
      
        <TextAbout>
          <h1>Take full control of <br /><b>your digital growth.</b></h1>

          <h5>Premier 9 Media is a cutting-edge digital marketing agency focused on empowering iGaming brands to thrive. Our solutions are built to maximize your business's potential through:</h5>
          
          <TopicAbout>
            <img src={skipTopic} alt="Seta indicando um tópico" />
            <h5>Comprehensive CRM to manage campaigns and monitor performance.</h5>
          </TopicAbout>
        
          <TopicAbout>
            <img src={skipTopic} alt="Seta indicando um tópico" />
            <h5>A team of in-house expertise from the heart of the iGaming dedicated to boosting your online visibility.</h5>
          </TopicAbout>

          <TopicAbout>
            <img src={skipTopic} alt="Seta indicando um tópico" />
            <h5>Seamless integration with the leading SEO tools.</h5>
          </TopicAbout>
        </TextAbout>
      </AboutUs>
    </Container>
  );
}

export default App;
