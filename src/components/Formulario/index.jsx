import { useState, useEffect } from "react"

const Formulario = () => {
  let [materiaA, setMateriaA] = useState(0);/* ESTADO DA NOTA */
  let [materiaB, setMateriaB] = useState(0);
  let [materiaC, setMateriaC] = useState(0);
  let [nome, setNome] = useState('');

  /* PARA EFETUAR UM EVETO QUANDO INICIA O COMPONENTE */
  useEffect(() => {

    /* AQUI QUANDO FINALIZA O COMPONENTE */
    return() => {

    }

  }, []);

  const alteraNome = (evento) => {
    setNome(evento.target.value);
  }

  const renderizaRasultado = () => {
    const soma = materiaA + materiaB + materiaC;
    const media = soma / 3;

    if (media >= 7) {
      return (
        <p>Ola {nome}, foi aprovado</p>
      )
    } else {
      return (
        <p>Voce foi reprovado</p>
      )
    }
  }

  return (
    <form>
      {/* RETORNANDO COM map NO ARRAY */}
      <ul>
        {[1,2,3,4].map(item => (
          <li key={item}>{item}</li>) 
          )}
      </ul>

      <input type="text"placeholder="Seu nome" onChange={alteraNome}/>
                                                {/* materiaA APENAS COM O target */}
      <input type="number" placeholder="Nota materia A" onChange={({target}) => setMateriaA(parseInt(target.value))} />
      <input type="number" placeholder="Nota materia B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
      <input type="number" placeholder="Nota materia C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
      {renderizaRasultado()}

    </form>
  )
}

export default Formulario