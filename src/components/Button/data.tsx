import {useState} from 'react'
import networking from "../../assets/network.svg";
import palestras from "../../assets/palestras.svg"
import cases from "../../assets/cases.svg"
import tendencias from "../../assets/tendencias.svg"


export const EXAMPLES = {
  components: {
    title: "Network",
    description:
      "Fazer networking é essencial para expandir suas oportunidades profissionais e obter suporte de uma comunidade diversificada de contatos. Ele permite conectar-se com pessoas relevantes, trocar informações e abrir portas para novas oportunidades de carreira.",
    image: networking,
  },
  jsx: {
    title: "Palestras",
    description:
      "Assistir palestras é valioso porque oferece a oportunidade de aprender com especialistas em diversos campos, expandindo conhecimentos e perspectivas. Além disso, palestras podem inspirar, motivar e fornecer insights valiosos para o desenvolvimento pessoal e profissional.",
    image: palestras,
  },
  props: {
    title: "Cases",
    description:
      "Ouvir cases de sucesso é benéfico porque fornece exemplos práticos e inspiradores de como superar desafios e alcançar objetivos. Eles oferecem insights sobre estratégias eficazes, lições aprendidas e melhores práticas que podem ser aplicadas em diferentes contextos profissionais, ajudando a orientar e informar decisões futuras.",
    image: cases,
  },
  state: {
    title: "Tendências",
    description:
      "Estar por dentro das tendências é fundamental porque permite antecipar mudanças no mercado e na indústria, adaptar-se às novas demandas e tecnologias, e manter-se competitivo. Além disso, acompanhar as tendências possibilita identificar oportunidades de inovação, desenvolvimento de habilidades relevantes e alinhamento estratégico com as necessidades do mercado e dos clientes.",
  image: tendencias,
  },
}
const Counter=()=> {
  const [isVisible, setIsVisible] = useState(false);

  const  handleClick=()=> {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );

};
