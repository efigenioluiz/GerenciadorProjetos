import styled from 'styled-components'


export const Container = styled.div`
   
    width: 100%;
    
`
export const Content = styled.div`
width: 100%;
height: 380px;
display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    
    table{
        width: 100%;
    }
    th{
        background: #313030;
        color: #EBA113;
        font-size: 21px;
    }
    td{
        text-align: center;
        color: #313030;
        font-weight: bold;
    }
`
export const Action = styled.div`
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content:center;

    img{
        width: 32px;
        height: 32px;
    }
`
export const Item = styled.div`
    width: 30%;

    button{
        cursor: pointer;
        background: none;
        border: none;
        outline: none;
    }
    

`