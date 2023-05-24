import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
  const [repos, setRepos] = useState([]);

  /* ESTADO PARA MOSTRAR CARREGANDO */
  const [estaCarregadndo, setEstaCarregando] = useState(true);

  useEffect(() => {
    setEstaCarregando(true);
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
    .then(resposta => resposta.json())
    .then(respostaJson => {

      setTimeout(() => {/* APENAS PARA ABRIR DEPOIS DE 2S */
      setEstaCarregando(false);
        setRepos(respostaJson);
      }, 2000);
    })
  }, [nomeUsuario]);

  return (
    <div className="container">
      {estaCarregadndo ? (
        <h1>Carregando....</h1>
      ) : (
        <ul className={styles.list}>
          {repos.map(({id, name, language, html_url}) => (
            <li className={styles.listItem} key={id}>
              <div className={styles.itemNname}>
                <b>Nome:</b> {name}
              </div>

              <div className={styles.itemLlanguage}>
                <b>Linguagem:</b> {language}
              </div>
          
                <a className={styles.itemLlink} target="_black" href={html_url}>Link Github</a>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ReposList;