import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { format } from 'date-fns'
import api from '../../services/api'

import { adapterDate } from '../../util'

import { Redirect } from 'react-router-dom'
import Header from '../../components/Header'
import PageTitle from '../../components/PageTitle'
import Footer from '../../components/Footer'

import research_icon from '../../assets/research_icon.png'
import research_icon_sel from '../../assets/research_icon_sel.png'
import inovation_icon from '../../assets/inovation_icon.png'
import inovation_icon_sel from '../../assets/inovation_icon_sel.png'

function Create({ match }) {


    const [redirect, setRedirect] = useState(false)
    const [type, setType] = useState('P')
    const [title, setTitle] = useState('')
    const [begin, setBegin] = useState(format(new Date(), "yyyy-MM-dd"))
    const [description, setDescription] = useState('')
    const [manager, setManager] = useState('')
    const [subrManager, setSubManager] = useState('')


    async function create() {

        let newBegin = adapterDate(begin, 2)


        if (match.params.id == 0) {
            await api.post(`/project`,
                {
                    'name': title,
                    'type': type,
                    'description': description,
                    'manager': manager,
                    'sub_manager': subrManager,
                    'begin': format(new Date(newBegin), "yyyy-MM-dd"),
                }).then(response => {
                    alert('Projeto Criado com Sucesso!')
                    // alert(newBegin)
                    setRedirect(true)
                })


        } else {
            await api.put(`/project/${match.params.id}`,
                {
                    'name': title,
                    'type': type,
                    'description': description,
                    'manager': manager,
                    'sub_manager': subrManager,
                    'begin': format(new Date(newBegin), "yyyy-MM-dd"),
                }).then(response => {
                    alert('Atualizado com Sucesso!')
                    // alert(newBegin)
                    setRedirect(true)
                })
        }
    }

    async function loadDataProject() {
        if (match.params.id != 0) {
            await api.get(`/project/${match.params.id}`)
                .then(response => {
                    setTitle(response.data.name)
                    setBegin(format(new Date(response.data.begin), "yyyy-MM-dd"))
                    setType(response.data.type)
                    setDescription(response.data.description)
                    setManager(response.data.manager)
                    setSubManager(response.data.sub_manager)
                }).catch(error => {
                    alert(error)
                })
        }
    }


    useEffect(() => {
        loadDataProject()
    }, [])


    return (
        <S.Container>
            { redirect && <Redirect to={`/projects`} />}
            <Header view="CRE" />
            <PageTitle title="CREATE" />
            <S.Content>
                <S.TypeBar>
                    <S.IconBar>
                        <button onClick={() => { setType("P") }}>
                            <img src={type == "P" ? research_icon_sel : research_icon} alt="research project" />
                        </button>
                        <button onClick={() => { setType("I") }}>
                            <img src={type == "I" ? inovation_icon_sel : inovation_icon} alt="research project" />
                        </button>
                    </S.IconBar>
                    <span>
                        {type == "P" ? "Projeto de Pesquisa" : "Projeto de Inovação"}
                    </span>
                </S.TypeBar>
                <S.FormLine>
                    <S.FormItem>
                        <label>Titulo</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(event) => { setTitle(event.target.value) }}
                            placeholder="Titulo do Projeto"
                            required
                        />
                    </S.FormItem>
                    <S.FormItem>
                        <label>Data</label>
                        <input
                            type="date"
                            value={begin}
                            onChange={(event) => { setBegin(event.target.value) }}
                            placeholder="Data"
                            required
                        />
                    </S.FormItem>
                </S.FormLine>

                <S.FormLine>
                    <S.FormItem>
                        <label>Descrição/Resumo</label>
                        <textarea
                            rows="6"
                            value={description}
                            onChange={(event) => { setDescription(event.target.value) }}
                            placeholder="Resumo Projeto"
                        />
                    </S.FormItem>

                    <S.FormItem>
                        <label>Coordenador</label>
                        <input
                            type="text"
                            value={manager}
                            onChange={(event) => { setManager(event.target.value) }}
                            rows="4"
                            placeholder="Nome do Coordenador"
                        />
                        <label>Vice-Coordenador</label>
                        <input
                            type="text"
                            rows="4"
                            value={subrManager}
                            onChange={(event) => { setSubManager(event.target.value) }}
                            placeholder="Nome do Vice-Coordenador"
                        />
                    </S.FormItem>
                </S.FormLine>
                <S.FormLine>
                    <S.FormItem>
                        <button onClick={() => { create() }}>Confirmar / Salvar</button>
                    </S.FormItem>
                </S.FormLine>

            </S.Content>
            <Footer />
        </S.Container>
    );
}

export default Create;
