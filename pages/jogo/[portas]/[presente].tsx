import { useEffect, useState } from "react";
import Porta from "../../../components/Porta";
import { createDoor, updateDoor } from "../../../functions/portas";
import styles from "../../../styles/Jogo.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

export default function jogo() {
  const router = useRouter();
  
  const [valido, setValido] = useState(false);
  const [portas, setPortas] = useState([]);

  useEffect(() => {
    const portas = +router.query.portas;
    const presente = +router.query.presente;

    const qtdePortasValida = portas >= 3 && portas <= 100
    const temPresenteValido = presente >= 1 && presente <= portas

    setValido(qtdePortasValida && temPresenteValido)

  }, [portas]);


  useEffect(() => {
    const portas = +router.query.portas;
    const presente = +router.query.presente;
    setPortas(createDoor(portas, presente));
  }, [router?.query]);

  // console.log(router?.query)

  function renderizarPortas() {
    return  portas.map((porta) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(novaPorta) => setPortas(updateDoor(portas, novaPorta))}
        />
      );
    });
  }
  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
        {valido ?
         renderizarPortas() :
         <h1>Valores inválidos!!</h1>
        }
       </div>
      <div className={styles.botoes}>
        <Link href="/">
          <button id="restart">Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  );
}
