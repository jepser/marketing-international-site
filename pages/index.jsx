import React from 'react';

import styled from 'styled-components';
import { Heading, Flex, Box, Text } from 'rebass/styled-components';
import { background } from 'styled-system';
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

const RoundedBox = styled(Box)`
  border-radius: 10px;
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

const Image = styled.img`
  display: block;
`;

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
    <Flex my="64px" alignItems="center">
      <Box width={1 / 2} px="32px">
        <Heading mb="16px" fontSize={[4]}>
          Identificaciones personales en PVC
        </Heading>
        <Text mb="12px">Tarjetas con medidas interacionales (CR80) con impresiones térmicas.</Text>
        <ul>
          <li>Tarjetas con códigos de barras</li>
          <li>Tarjetas con chip</li>
          <li>Tarjetas con banda magnética</li>
          <li>Tarjetas de proximidad</li>
        </ul>
      </Box>
      <RoundedBox width={1 / 2} bg="#E4572E" overflow="hidden">
        <Image src="/tarjetas.png" alt="tarjetas" />
      </RoundedBox>
    </Flex>
    <Flex my="64px" alignItems="center" flexDirection="row-reverse">
      <Box width={1 / 2} px="32px">
        <Heading mb="16px" fontSize={[4]}>
          Accesorios para identificadores
        </Heading>
        <Text mb="12px">Tarjetas con medidas interacionales (CR80) con impresiones térmicas.</Text>
        <ul>
          <li>Clips</li>
          <li>Fundas</li>
          <li>Cintas</li>
          <li>Cintas impresas</li>
          <li>Yoyos</li>
        </ul>
      </Box>
      <RoundedBox width={1 / 2} bg="#EFA00B" overflow="hidden">
        <Image src="/accesorios.png" alt="tarjetas" />
      </RoundedBox>
    </Flex>
  </Container>
);

export default Home;
