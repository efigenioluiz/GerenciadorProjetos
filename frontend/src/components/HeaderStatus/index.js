import React, { useEffect, useState } from 'react'
import * as S from './styles'
import api from '../../services/api'
import status from '../../assets/notification_icon.png'

function HeaderStatus() {

    const [count, setCount] = useState([])

    async function countProject() {
        await api.get('/project/count')
            .then(response => {
                setCount(response.data)
            })
    }
    useEffect(() => {
        countProject()
    }, [])

    return (
        <S.Container>
            <img src={status} alt="status home" />
            <span>{count}</span>
        </S.Container>
    )
}
export default HeaderStatus