import {AboutUs, BackgroundDepoiments, BannerHome, ButtonPrimary, Buttons, ButtonSecondary, Card, Chip, Container, Depoiments, DepoimentsCarousel, Icon, ImageBannerHome, ImageMockup, Intro, Label, Meeting, Section, Services, TextAbout, TextCard, TopicAbout, Value} from './styles.js';
import { Carousel } from '@trendyol-js/react-carousel';
import Item from "./components/CardRating";
import Header from './components/Header';
import CardService from './components/CardService/index.js';

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

      <Services>
        <Intro>
          <img src={Switch} alt="" />

          <h1>Services for <b>you.</b></h1>
          <h5>Lorem ipsum dolor sit amet consectetur. A id cras odio sed sodales. Posuere ut at sem ut sit risus tincidunt. <br />Tincidunt morbi amet senectus feugiat pellentesque mi leo urna.</h5>
        </Intro>

        <CardService icon={iconTwo} title="Link Building" text="With years of iGaming experience, we build long-term, high-quality backlinks across global markets. Our expertise spans multiple languages and global markets partnering with top-tier websites and media outlets worldwide, we strategically place content to boost visibility, drive traffic, and enhance SEO performance." />
        <CardService icon={iconOne} title="Content Marketing" text="Content is the cornerstone of digital success. We create impactful, data-driven content that resonates with your audience and aligns with your brand's objectives. From setting clear objectives to designing a detailed content calendar, we provide end-to-end content marketing solutions." />
        <CardService icon={iconThree} title="SEO & Brand Awareness" text="We make it possible to select the best opportunities to achieve your goals. We analyze your audience, negotiate powerful partnerships, and make your brand a household name in your industry. Notoriety & Visibility: Reach your audience with PR/Outreach campaigns expanding across diverse platforms. Time: Save time & we negotiate it faster. Create a strong bond between your Logo, brand's name, & what it represents in people's minds." />
      </Services>

      <Depoiments>
        <Intro>
          <img src={Switch} alt="" />

          <h1>See what others are <b>saying.</b></h1>
          <h5>Lorem ipsum dolor sit amet consectetur. A id cras odio sed sodales. Posuere ut at sem ut sit risus tincidunt. <br />Tincidunt morbi amet senectus feugiat pellentesque mi leo urna.</h5>
        </Intro>

        <BackgroundDepoiments src={Line} alt="" />

        <DepoimentsCarousel>
          <Carousel show={2} slide={2} leftArrow={<img src={SkipLeft} />} rightArrow={<img src={SkipRight} />} >
            <Item name="Alex Kall" text="Spote has been our guide to get into organic traffic to our site and visibility on other sites through quality link building, we are pleased with the spontaneous growth"/>
            <Item name="Veronika Mva" text="We were having a lot of difficulty achieving the volume of backlinks we needed for our products, Spote was able to help us quickly, without skimping on the quality of the content at a fair price"/>
            <Item name="Roy Leib" text="We work with sensitive content, it's hard to find suppliers who are so quick to deliver this type of content, so I can say that I'm very satisfied with the partnership so far."/>
          </Carousel>
        </DepoimentsCarousel>
      </Depoiments>

      <Meeting>
        <Intro>
            <h1>Let’s discuss <b>your business.</b></h1>
            <h5>We provide customized solutions tailored to your business needs,<br />exploring possibilities and creating opportunities for growth.</h5>

            <h2>Schedule a <b>30-minute</b> meeting</h2>
            <h5>In just half an hour, we’ll show you how we can help you<br />lead the digital game.</h5>
          </Intro>
      </Meeting>
    </Container>
  );
}

export default App;
