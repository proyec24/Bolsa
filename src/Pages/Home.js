import React from "react";
import Header from "../Components/Header/HeaderWhite";
import Homebanner from "../Components/Homebanner"
import CarrouselMarcas from "../Components/CarrouselMarcas";
import Categorias from "../Components/Categorias";
import Teambanner from "../Components/Teambanner";
import Card from "../Components/Card";
import OpcionRegistro from "../Components/OpcionRegistro";

function Home() {
    return (
      <div>
        <Header />
        <Homebanner />
        <CarrouselMarcas />
        <Categorias/>
        <Teambanner />
        <Card />
        <OpcionRegistro/>
      </div>
    );
}

export default Home
