import React from 'react'
import * as S from './styles'
import logo from '../../assets/logo_icon.png'

function Footer() {
    return (
        <S.Container>
            <S.LeftSide >
                <span>Luiz Carlos Efigênio</span>
            </S.LeftSide>

            <S.RightSide >
                <img src={logo} alt="logo app" />
            </S.RightSide>
        </S.Container>
    )
}
export default Footer