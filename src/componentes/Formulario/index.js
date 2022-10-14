import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data-Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const  aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('hello there', nome, cargo, imagem, time)

    }

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados abaixo para criar o card do colaborador</h2>
                <CampoTexto 
                obrigatorio = {true} 
                label='Nome' 
                placeholder='Digite seu nome'
                valor={nome} 
                aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                obrigatorio = {true} 
                label='Cargo' 
                placeholder='Digite seu cargo'
                valor={cargo}
                aoAlterado={valor => setCargo(valor)} 
                />
                <CampoTexto 
                label='Imagem' 
                placeholder='digite o endereço da imagem' 
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                obrigatorio = {true} 
                label = 'Time' 
                item = {times} 
                valor={time}
                aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Carregar arquivos
                </Botao>
            </form>
        </section>
    )

}

export default Formulario