import React from 'react'
import * as S from './styles'

import home from '../../assets/home_icon.png'
import home_sel from '../../assets/home_icon_sel.png'

import create from '../../assets/create_icon.png'
import create_sel from '../../assets/create_icon_sel.png'

import project from '../../assets/project_icon.png'
import project_sel from '../../assets/project_icon_sel.png'

function HeaderItem({ image, selected }) {
    let img

    if (image == "HOME") {
        img = home
        if (selected) img = home_sel

    } else if (image == "PRO") {
        img = project
        if (selected) img = project_sel

    } else if (image == "CRE") {
        img = create
        if (selected) img = create_sel

    }
    return (
        <S.Container>
            <img src={img} alt="button" />
        </S.Container>
    );
}

export default HeaderItem;
