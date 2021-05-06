import React, { useState, useEffect } from 'react'
import * as S from './styles'
import { format } from 'date-fns'
import { Redirect } from 'react-router-dom'
import api from '../../services/api'
import { adapterDate } from '../../util'

import Header from '../../components/Header'
import PageTitle from '../../components/PageTitle'
import Footer from '../../components/Footer'

import finish_icon_dis from '../../assets/finish_icon_disabled.png'
import finish_icon from '../../assets/finish_icon.png'
import update from '../../assets/update_icon.png'

function Projects() {

    const [id, setId] = useState(0)
    const [redirect, setRedirect] = useState(false)
    const [projects, setProjects] = useState([])
    const [dateup, setDateup] = useState(format(new Date(), "yyyy-MM-dd"))

    async function loadProjects() {
        await api.get('/project')
            .then(response => {
                setProjects(response.data)
                console.log(projects)
            })
    }
    async function finishProject(id) {
        let newDate = adapterDate(dateup, 2)

        await api.put(`/project/finish/${id}`,
            { 'finish': format(new Date(newDate), "yyyy-MM-dd") }
        ).then(response => {
            alert('Projeto Finalizado com Sucesso')
            loadProjects()
        }).catch(error => {
            console.log(error)
            alert('Error')

        })
    }
    function updateProject(id) {
        setId(id)
        setRedirect(true)

    }

    useEffect(() => {
        loadProjects()
    }, [])

    return (
        <S.Container>
            { redirect && <Redirect to={`/create/${id}`} />}
            <Header view="PRO" />
            <PageTitle title="PROJECTS" />
            <S.Content>
                <table>
                    <tr>
                        <th>TÍTULO</th>
                        <th>COORDENADOR</th>
                        <th>CATEGORIA</th>
                        <th>INÍCIO</th>
                        <th>FINAL</th>
                        <th>AÇÕES</th>
                    </tr>
                    {
                        projects.map(p =>
                            <tr>
                                <td>{p.name}</td>
                                <td>{p.manager}</td>
                                <td>{p.type == "P" ? "Pesquisa" : "Inovação"}</td>
                                <td>{format(new Date(p.begin), "dd/MM/yyyy")}</td>
                                <td>
                                    {
                                        p.finish == null
                                            ?
                                            <input
                                                type="date"
                                                value={dateup}
                                                onChange={(event) => { setDateup(event.target.value) }}
                                            />
                                            :
                                            <input
                                                type="date"
                                                value={format(new Date(p.finish), "yyyy-MM-dd")}
                                                disabled
                                            // onChange={}
                                            />

                                    }

                                </td>
                                <td>
                                    <S.Action>
                                        <S.Item>
                                            {
                                                p.finish == null
                                                    ?
                                                    <button onClick={() => { finishProject(p._id) }}>
                                                        <img src={finish_icon} lat="finish project" />
                                                    </button>
                                                    :
                                                    <img src={finish_icon_dis} lat="finish project disable" />
                                            }
                                        </S.Item>
                                        <S.Item>
                                            <button onClick={() => { updateProject(p._id) }}>
                                                <img src={update} lat="update project" />
                                            </button>
                                        </S.Item>
                                    </S.Action>
                                </td>
                            </tr>
                        )
                    }
                </table>
            </S.Content>
            <Footer />
        </S.Container>
    );
}

export default Projects;
