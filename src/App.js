import React from 'react';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import dadosIniciais from './data/dados_iniciais.json';

function App() {
  return (
    <div>
      <Menu />

      <BannerMain 
      videoTitle={dadosIniciais.categorias[0].videos[2].titulo} 
      url={dadosIniciais.categorias[0].videos[2].url}
      videoDescription={"Neste Alura+, a Juliana Negreiros fala sobre componentização de telas com VanillaJS sem utilizar nenhum framework! Ela explica como você pode trabalhar com os componentes além de como analisar seus elementos e sua composição, tudo isso com exemplos práticos. Confira!"}
      />

      <Carousel
      ignoreFirtVideo
      category={dadosIniciais.categorias[0]}
      />

      <Carousel
      ignoreFirtVideo
      category={dadosIniciais.categorias[1]}
      />

      <Carousel
      ignoreFirtVideo
      category={dadosIniciais.categorias[2]}
      />

      <Carousel
      ignoreFirtVideo
      category={dadosIniciais.categorias[3]}
      />

      <Carousel
      ignoreFirtVideo
      category={dadosIniciais.categorias[4]}
      />

      <Carousel
      ignoreFirtVideo
      category={dadosIniciais.categorias[5]}
      />

      <Footer />
    </div>
  );
}

export default App;
