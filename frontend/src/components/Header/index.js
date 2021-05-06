import React, { useState } from 'react'
import * as S from './styles'
import HeaderItem from '../HeaderItem'
import HeaderStatus from '../HeaderStatus'

import { Link } from 'react-router-dom'

function Header({ view }) {
    const [item, setItem] = useState(view)

    return (
        <S.Container>
            <S.LeftSide>
                <Link to="/">
                    <button type="button" onClick={() => setItem("HOME")}>
                        <HeaderItem image="HOME" selected={item == "HOME"} />
                    </button>
                </Link>
                <Link to="/projects">
                    <button type="button" onClick={() => setItem("PRO")}>
                        <HeaderItem image="PRO" selected={item == "PRO"} />
                    </button>
                </Link>
                <Link to="/create/0">
                    <button type="button" onClick={() => setItem("CRE")}>
                        <HeaderItem image="CRE" selected={item == "CRE"} />
                    </button>

                </Link>
            </S.LeftSide>


            <S.RightSide>
                <HeaderStatus />
            </S.RightSide>
        </S.Container >
    );
}

export default Header;
