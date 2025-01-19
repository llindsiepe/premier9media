import {AboutUs, BackgroundDepoiments, BannerHome, ButtonPrimary, Buttons, ButtonSecondary, Calendly, Card, Chip, Container, Depoiments, DepoimentsCarousel, Icon, ImageBannerHome, ImageMockup, Intro, Label, Meeting, Section, Services, TextAbout, TextCard, TopicAbout, Value} from './styles.js';
import Item from "./components/CardRating";
import Header from './components/Header';
import CardService from './components/CardService/index.js';
import Footer from './components/Footer/index.js';
import {InlineWidget} from 'react-calendly';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import Skip from './images/skip.png';
import ImageMockup001 from './images/imageMockup001.png';
import iconOne from './images/iconOne.png';
import iconTwo from './images/iconTwo.png';
import iconThree from './images/iconThree.png';
import ChipImage from './images/chip.png'
import ImageMockup002 from './images/mockup002.png';
import skipTopic from './images/skipTopic.png';
import Switch from './images/switch.png';
import Line from './images/line.png';
import SkipRight from './images/skipRight.png';
import SkipLeft from './images/skipLeft.png';


function App() {
  const handleMailTo = () => {
    window.location.href = "mailto:sales@premier9media.com";
  };    

  const handleClickAnchor = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600, // Largura máxima de 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        },
      },
    ],
  };

  return (
    <Container id="home">
      <Header />
      
      <BannerHome>
        <h1>Unlock Winning Opportunities <br />with <b>Premier 9 Media.</b></h1>
        <h5>LET’S TALK STRATEGY.</h5>

        <Buttons>
            <ButtonPrimary onClick={() => {handleClickAnchor("meeting")}}>
              <h6>Schedule a meeting</h6>
              <img src={Skip} alt="Seta apontando para o botão" />
            </ButtonPrimary>

            <ButtonSecondary onClick={handleMailTo}>
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

      <Services id="services">
        <Intro>
          <img src={Switch} alt="" />

          <h1>Services for <b>you.</b></h1>
          <h5>A decade of iGaming Expertise, our winning service delivery</h5>
        </Intro>

        <CardService icon={iconTwo} title="Link Building" text="With years of iGaming experience, we build long-term, high-quality backlinks across global markets. Our expertise spans multiple languages and global markets partnering with top-tier websites and media outlets worldwide, we strategically place content to boost visibility, drive traffic, and enhance SEO performance." />
        <CardService icon={iconOne} title="Content Marketing" text="Content is the cornerstone of digital success. We create impactful, data-driven content that resonates with your audience and aligns with your brand's objectives. From setting clear objectives to designing a detailed content calendar, we provide end-to-end content marketing solutions." />
        <CardService icon={iconThree} title="SEO & Brand Awareness" text="We make it possible to select the best opportunities to achieve your goals. We analyze your audience, negotiate powerful partnerships, and make your brand a household name in your industry. Notoriety & Visibility: Reach your audience with PR/Outreach campaigns expanding across diverse platforms. Time: Save time & we negotiate it faster. Create a strong bond between your Logo, brand's name, & what it represents in people's minds." />
      </Services>

      <Depoiments>
        <Intro>
          <img src={Switch} alt="" />

          <h1>See what others are <b>saying.</b></h1>
          <h5>Trusted by the Big Players, our expertise growing the SEO channel.</h5>
        </Intro>

        <BackgroundDepoiments src={Line} alt="" />

        <DepoimentsCarousel>
          <Slider {...settings}>
            <Item name="Emily Harper" text="The high-quality backlinks made all the difference for our website. We’re ranking higher and attracting better-quality users. I wouldn’t hesitate to recommend them, I am very satisfied." />
            <Item name="Michael Scott" text="The partnership has been outstanding from day one. They understand the nuances of the iGaming industry, and it shows in the results. A fantastic ROI for our SEO efforts. Well done, P9 team top marks!" />
            <Item name="Oliver Reed" text="Tapping into difficult and highly competitive markets felt daunting, but this agency made it seamless. Their strategic approach and industry knowledge have enabled us to achieve visibility where it matters most. great results across the board!" />
          </Slider>
        </DepoimentsCarousel>
      </Depoiments>

      <Meeting id="meeting">
        <Intro>
            <h1>Let’s discuss <br/><b>your business.</b></h1>
            <h5>We provide customized solutions tailored to your business needs,<br />exploring possibilities and creating opportunities for growth.</h5>

            <h2>Schedule a <b>30-minute</b> meeting</h2>
            <h5>In just half an hour, we’ll show you how we can help you<br />lead the digital game.</h5>
        </Intro>

        <Calendly>
          <InlineWidget url="https://calendly.com/premier9media-sales/30min" />
        </Calendly>
      </Meeting>

      <Footer />
    </Container>
  );
}

export default App;
