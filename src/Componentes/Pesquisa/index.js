import { useState } from "react"
import {pets} from "./dadosPesquisa"

function Pesquisa(){
    const [petsPesquisadas, setPetsPesquisadas] = useState([])
  
    return(
        <section>
            <h1>Encontre seu Pet agora:</h1>
            <input
                placeholder="digite seu próximo amigo "
                // evento do onBlur mudar a cor do input além de fazer a 
               // captura do conteudo pelo parametro do evento
                onBlur={(evento=>{
                    const textoDigitado = evento.target.value;
                    /*
                    retornar as vagas filtradas, o filtro ele recebe uma funcao para cada elemento da lista
                    se rertorna verdadeiros fica lista caso retorne falso ele nao entra na nossa lista
                    -- include-- verifica se nome digitado esta na lista 
                    */
                    const resultadoPesquisa = pets.filter(pets => pets.titulo.includes(textoDigitado))
                    //salava a variavel no state 
                    setPetsPesquisadas(resultadoPesquisa)
                })}
            ></input>
            {/* utilizar o map para mostrar na tela a lista de vaga */}

            {petsPesquisadas.map(pets=>(
                <div>
                    <p>{pets.titulo}</p>
                </div>
            ))

            }

        </section>
    )
}

export default Pesquisa