import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 42px 56px;
    border-radius: 5px;
    border: 1px solid #000;
    height: 100%;
    width: 100%;
    max-width: 130px;
    align-items: center;
    justify-content: space-between;
`

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 9rem;
`

export const Title = styled.h1`
    font-size: 26px;
    font-weight: 600;
    color: #000;
`

export const Image = styled.img`
 
    object-fit: cover;
    height: 60px;
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