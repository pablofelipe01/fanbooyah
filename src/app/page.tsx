'use client';
import { NavBar } from "../../components/NavBar";
import { Staking } from "../../components/Staking";
import styled from "styled-components";

export default function Home() {
  return (
    <Page>
      <NavBar />
      <Container>
        <InnerContainer>
          <Section>
            <Staking />
          </Section>
          {/* <Section>
            <PlanA />
          </Section> */}
        </InnerContainer>
      </Container>
    </Page>
  );
}

const Page = styled.div`
  background-image: url('/images/21.png'); // Reemplaza con la ruta de tu imagen
  background-size: cover; // Asegura que la imagen cubra todo el fondo
  background-position: center; // Centra la imagen
  background-repeat: no-repeat; // Evita que la imagen se repita
  min-height: 100vh; // Asegura que el fondo cubra toda la altura de la pantalla
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin: 20px auto;
  width: 100%;
  max-width: 1000px;
  margin-top: 80px;
  backdrop-filter: blur(5px); // Opcional: Aplica un desenfoque al contenido para mejorar la legibilidad
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap; // Para permitir el ajuste en pantallas más pequeñas
  gap: 20px; // Espacio entre las secciones

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Section = styled.div`
  flex: 1;
  margin: 20px;
  min-width: 280px; // Ancho mínimo para cada sección

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0; // Ajustar margen para pantallas más pequeñas
  }
`;
