import React from 'react'
import * as S from './styles'

import Header from '../../components/Header'
import PageTitle from '../../components/PageTitle'
import Footer from '../../components/Footer'

import finish_icon_dis from '../../assets/finish_icon_disabled.png'
import finish_icon from '../../assets/finish_icon.png'
import update from '../../assets/update_icon.png'

function Projects() {
    return (
        <S.Container>
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
                    <tr>
                        <td>Campus Inteligente</td>
                        <td>GIL EDUARDO</td>
                        <td>PESQUISA</td>
                        <td>01/03/2018</td>
                        <td>-</td>
                        <td>
                            <S.Action>
                                <S.Item>
                                    <button onClick={() => { alert('click') }}>
                                        <img src={finish_icon} lat="finish project" />
                                    </button>
                                </S.Item>
                                <S.Item>
                                    <button onClick={() => { alert('click') }}>
                                        <img src={update} lat="update project" />
                                    </button>
                                </S.Item>
                            </S.Action>
                        </td>
                    </tr>
                </table>
            </S.Content>
            <Footer />
        </S.Container>
    );
}

export default Projects;
