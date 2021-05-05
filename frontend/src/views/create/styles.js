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

    span{
        font-size: 38px;
        font-wieght: bold;
        color: #313030;
        margin: 40px 0;
    }
`

export const TypeBar = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width:64px;
        height: 64px;
    }
    button{
        cursor: pointer;
        background: none;
        outline: none;
        border:none
    }
    span{
        font-height: bold;
        margin-top: 10px;
        color: #313030
    }
`
export const IconBar = styled.div`
    display: flex;
    
    flex-direction: row;
`
export const FormLine = styled.div`
    display: flex;
    width:90%;
    justify-content: center;
    margin-top: 20px;
`
export const FormItem = styled.div`

    width:50%;
    display:flex;
    flex-direction: column;
    justify-content: start;
    padding: 0 10px;
    
    label{
        font-height: bold;
        color: #313030;
        padding-bottom: 5px;
        padding-top: 10px;
    }
    
    input{
        height: 25px;
        border-radius: 5px;
    }
    textarea{
        border-radius: 10px;
        border-width: 3px
    }
    button{
        height: 40px;
        background:  #EBA113;
        border: none;
        outline: none;
        border-radius: 6px;
        font-size: 25px;
        font-height: bold;
        color: 313030;
        cursor:pointer;
    }
`