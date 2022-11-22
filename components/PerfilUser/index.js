import { MainPerfil, ImagePerfil, BoxText, TitlePerfil } from "./styles";
export default function PerfilUser(props) {
  const { name, image, nick } = props;
  return (
    <MainPerfil>
      <ImagePerfil>
        <img src={image} alt="Imagem do perfil do monarca" />
      </ImagePerfil>

      <BoxText>
        <TitlePerfil>
          <h1>{nick}</h1>
          <p>{name}</p>
        </TitlePerfil>
      </BoxText>
    </MainPerfil>
  );
}
