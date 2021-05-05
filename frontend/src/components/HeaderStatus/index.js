import React, { useState } from 'react'
import * as S from './styles'

import status from '../../assets/notification_icon.png'

function HeaderStatus() {

    return (
        <S.Container>
            <img src={status} alt="status home" />
            <span>12</span>
        </S.Container>
    )
}
export default HeaderStatus