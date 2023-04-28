import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px 56px;
    border-radius: 5px;
    border: 1px solid #000;
    height: 100%;
    width: 100%;
    max-width: 130px;
    align-items: center;
    justify-content: space-around;
`

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Title = styled.h1`
    font-size: 22px;
    font-weight: 600;
    color: #000;
`

export const Image = styled.img`
 
    object-fit: cover;
    height: 50px;
    border-radius: 5px;
`

export const Button = styled.button`
    border: none;
    border-radius: 16px;
    background-color: #5E17EB;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    padding: 12px 20px;
    `