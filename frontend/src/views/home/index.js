import React from 'react'
import * as S from './styles'

import Header from '../../components/Header'
import PageTitle from '../../components/PageTitle'
import Footer from '../../components/Footer'

function Home() {
    return (
        <S.Container>
            <Header view="HOME" />
            <PageTitle title="HOME" />
            <S.Content>
                <span>Sistema de Gerenciamento de Projetos de Pesquisa e Inovação</span>
            </S.Content>
            <Footer />
        </S.Container>
    );
}

export default Home;
