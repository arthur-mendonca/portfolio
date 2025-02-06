import { Button } from "@/styles/Buttons";
import {
  FirstBlock,
  LastBlock,
  MiddleBlock,
  UpperSection,
  LowerSection,
  RotatedText,
  FirstUpperBlock,
  MiddleUpperBlock,
  LastUpperBlock,
  Greetings,
} from "./style";

import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { userData } from "@/utils/userData";

const About = () => {
  function calcularIdade(dataNascimento: string): number {
    let hoje = new Date();
    let nascimento = new Date(dataNascimento);
    let diferenca = hoje.getTime() - nascimento.getTime();
    let idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
    return idade;
  }

  return (
    <div>
      <h1>About</h1>
      <UpperSection>
        <FirstUpperBlock>
          <Greetings>
            Olá, meu nome é Arthur Mendonça e é um prazer ter você aqui.
          </Greetings>
        </FirstUpperBlock>
        <MiddleUpperBlock>
          ▶️ Full stack developer
          <br />
          ▶️ Javascript, CSS, HTML, React.js, TypeScript, Node.js, Express.js,
          Python, Django, DRF, SQL, TypeORM, Three.js, UI Path Studio,
          <br />
          ▶️ Fluente em inglês (nível C2) e competente em alemão.
          <br />
          ▶️ Praticante das boas práticas de desenvolvimento e da metodologia
          ágil SCRUM <br />
          ▶️ Familiaridade com ferramentas de design como Adobe Photoshop e
          Figma.
          <br />
        </MiddleUpperBlock>
        <LastUpperBlock></LastUpperBlock>
      </UpperSection>
      <LowerSection>
        <FirstBlock>
          <RotatedText>Sobre mim</RotatedText>
        </FirstBlock>
        <MiddleBlock>
          Olá! Meu nome é Arthur e sou um entusiasta da tecnologia desde que me
          lembro. Atualmente tenho {calcularIdade("1991-09-13")} anos, minha
          paixão pela área digital me guiou até onde estou agora. Quando não
          estou mergulhado em códigos, você pode me encontrar aprimorando minhas
          habilidades de desenho, um hobby que cultivo com tanto amor quanto
          minha profissão.
          <br />
          <br />
          Como desenvolvedor, possuo um conjunto diversificado de habilidades
          que inclui, mas não se limita a: JavaScript, CSS, HTML, React.js,
          React Hooks, React Router DOM, gerenciamento de estado em React, API
          Restful, TypeScript, Styled Components, Axios, Yup, Node.js,
          Express.js, SQL, TypeORM, PostgreSQL, programação assíncrona,
          programação orientada a objetos, web design responsivo e NPM. Além
          dessas, em meus projetos pessoais, tive a oportunidade de explorar
          Python, UI Path Studio e SASS. Além de ser fluente em inglês (nível
          C2), também tenho um bom domínio do alemão.
          <br />
          <br />
          Sou familiarizado com ferramentas de design como Adobe Photoshop e
          Figma, habilidades que complementam e enriquecem meu trabalho como
          desenvolvedor.
          <br />
          <br />
          Estou sempre aberto para novos projetos e oportunidades. Sinta-se à
          vontade para entrar em contato.
        </MiddleBlock>
        <LastBlock>
          <Button
            type="circle"
            target="_blank"
            as="a"
            aria-label="Github"
            href={`https://github.com/${userData.githubUser}`}
          >
            <FaGithub size={30} />
          </Button>
          <Button
            type="circle"
            target="_blank"
            as="a"
            aria-label="Github"
            href={`https://github.com/${userData.githubUser}`}
          >
            <FaLinkedinIn size={28} />
          </Button>
          <Button
            type="circle"
            target="_blank"
            as="a"
            aria-label="Github"
            href={`https://github.com/${userData.githubUser}`}
          >
            <FaWhatsapp size={25} />
          </Button>
        </LastBlock>
      </LowerSection>
    </div>
  );
};

export { About };
