import React from 'react';

import styled from 'styled-components';
import { Heading, Flex, Box } from 'rebass/styled-components';

import Section from '../components/section/section';
import Container from '../components/container';
import LogoImage from '../public/logo-marketing.svg';

const Logo = styled(LogoImage)`
  display: block;
  width: 200px;
  margin: 0 auto;
  path {
    fill: white;
  }
`;

const Hero = styled(Flex)`
  border-radius: 20px;
`;

const Button = styled.button`
  border: 0;
  padding: 12px 28px;
  font-size: inherit;
  font-family: inherit;
  color: white;
  background-color: #80ab41;
  border-radius: 4px;
  cursor: pointer;
`;

const SERVICES = [
  {
    title: 'Identificaciones personales en PVC',
    description: 'Tarjetas con medidas interacionales (CR80) con impresiones térmicas.',
    background: '#E4572E',
    image: '/tarjetas.png',
    body: () => (
      <ul>
        <li>Tarjetas con códigos de barras</li>
        <li>Tarjetas con chip</li>
        <li>Tarjetas con banda magnética</li>
        <li>Tarjetas de proximidad</li>
      </ul>
    ),
  },
  {
    title: 'Accesorios para identificadores',
    description: 'Tarjetas con medidas interacionales (CR80) con impresiones térmicas.',
    background: '#EFA00B',
    image: '/accesorios.png',
    body: () => (
      <ul>
        <li>Clips</li>
        <li>Fundas</li>
        <li>Cintas</li>
        <li>Cintas impresas</li>
        <li>Yoyos</li>
      </ul>
    ),
  },
  {
    title: 'Uniformes escolares',
    description: 'Utilizamos telas cien por ciento algodón, sintéticas y la mezcla de ellas. Para impresiones usamos:',
    background: '#4CB944',
    image: '/uniformes.png',
    body: () => (
      <ul>
        <li>Serigrafías</li>
        <li>Impresión digital</li>
        <li>Bordados</li>
        <li>Sublimación</li>
      </ul>
    ),
  },
  {
    title: 'Textiles',
    background: '#08B2E3',
    image: '/textiles.png',
    body: () => (
      <ul>
        <li>Chalecos con cintas reflectivas</li>
        <li>Chalecos de periodistas</li>
        <li>Bolsas</li>
        <li>Bolsa lapicera</li>
        <li>Mousepads</li>
        <li>Baberos impresos</li>
        <li>Entre otros...</li>
      </ul>
    ),
  },
];

const Home = () => (
  <Container p="12px">
    <Hero height="500px" bg="#2364AA" alignItems="center" justifyContent="center">
      <Box>
        <Box mb="16px">
          <Logo />
        </Box>
        <Heading color="white" textAlign="center" fontSize={[6]}>
          Artículos promocionales, <br />
          gafetes de identificación <br />y accesorios para colegios
        </Heading>
        <Box textAlign="center" mt="16px">
          <Button bg="#80AB41">Contactar</Button>
        </Box>
      </Box>
    </Hero>
    {SERVICES.map((service, index) => {
      const { title, body, description, image, background } = service;
      return (
        <Section
          key={title}
          title={title}
          description={description}
          background={background}
          image={image}
          reverse={index % 2}
        >
          {body}
        </Section>
      );
    })}
  </Container>
);

export default Home;
