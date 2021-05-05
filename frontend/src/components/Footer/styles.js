import styled from 'styled-components'


export const Container = styled.div`
   
    width: 100%;
    height: 45px;
    background-color: #313030;
    border-top: 10px solid #EBA113;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    
`
export const LeftSide = styled.div`
   
    width: 50%;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 24px;
    box-sizing: border-box;
    
    span{
        color: white;
        font-weight: bold;
    }
    
    `
export const RightSide = styled.div`
    
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    padding-right: 24px;

    justify-content: flex-end;
    box-sizing: border-box;
    img {
        width: 90px;
        height: 30px;
    }
    
`