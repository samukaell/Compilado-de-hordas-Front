import { useRouter } from 'next/router';
import { IoSkull } from "react-icons/io5";
import {
  ContainerHome,
  BoxTitle,
  TitleApp,
  BoxButton,
} from "../../styles/Styles-home/styles";

export default function Home() {
  const router = useRouter();

  function goPerfil(){
    console.log("Ir para o perfil");
    router.push('/perfil')
  }

  return (
    <ContainerHome>
      <BoxTitle>
        <IoSkull className="Icon" />
        <TitleApp><p>Dominios</p><p className="d">do</p><p>Monarca</p>

        </TitleApp>
        <BoxButton>
          <button onClick={goPerfil}>
            Iniciar
          </button>
        </BoxButton>
      </BoxTitle>
    </ContainerHome>
  );
}
