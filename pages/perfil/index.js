import Header from "../../components/Header";
import PerfilUser from "../../components/PerfilUser";
import { ContainerHome, BoxPerfil } from "../../styles/Styles-perfil";
import { useState, useEffect } from "react";
import { data } from "../../DATA/index.js";

export default function Pefil() {
  const [perfils, setPerfils] = useState([]);

  useEffect(() => {
    setPerfils(data);
    console.log("data", data);
    console.log("PERFIL 1 ->", data[1].nick);
  }, []);

  return (
    <ContainerHome>
      <Header />
      <BoxPerfil>
        {perfils.map((perfil) => {
          return(
          <PerfilUser
            name={perfil.name}
            nick={perfil.nick}
            image={perfil.image}
          />)
        })}
      </BoxPerfil>
    </ContainerHome>
  );
}
/*

{perfils.map((perfil, index) => {
          <PerfilUser
            name={perfil.name}
            image={perfil.image}
            nick={perfil.image}
            key={index}
          />;
        })}


        <PerfilUser
            name={perfils[0].name}
            nick={perfils[0].nick}
            image={perfils[0].image}
        />
*/
