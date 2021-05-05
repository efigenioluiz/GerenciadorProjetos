import React, { useState } from 'react'
import * as S from './styles'
import { format } from 'date-fns'

import Header from '../../components/Header'
import PageTitle from '../../components/PageTitle'
import Footer from '../../components/Footer'

import research_icon from '../../assets/research_icon.png'
import research_icon_sel from '../../assets/research_icon_sel.png'
import inovation_icon from '../../assets/inovation_icon.png'
import inovation_icon_sel from '../../assets/inovation_icon_sel.png'

function Create() {
    const [type, setType] = useState('P')
    const [title, setTitle] = useState('')
    const [begin, setBegin] = useState(format(new Date(), "yyyy-MM-dd"))
    const [description, setDescription] = useState('')
    const [manager, setManager] = useState('')
    const [subrManager, setSubManager] = useState('')

    return (
        <S.Container>
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
                        <button onClick={() => { }}>Confirmar / Salvar</button>
                    </S.FormItem>
                </S.FormLine>

            </S.Content>
            <Footer />
        </S.Container>
    );
}

export default Create;
