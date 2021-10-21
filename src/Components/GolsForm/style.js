import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: auto;
    min-height: 100px;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 1103px){
        flex-direction: column;
        padding-bottom: 10px;
    }
`

export const Title = styled.h2`
    font-family: Arial;
    color: #37474F;
    @media (max-width: 768px){
        margin-bottom: 10px;
    }
    
`

export const InputsBoxs = styled.div`
    margin-left: 30px;

    @media (max-width: 768px){
        display: flex;
        flex-direction:column;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin: 0;
    }
`