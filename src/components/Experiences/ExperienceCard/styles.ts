import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: ${(props: { isReverse: boolean }) => props.isReverse ? 'row-reverse' : 'row'};
    max-width: 100%;
    border: 1px solid #000;
    border-radius: 8px;
    `
export const TextContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 24px;
    gap: 8px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    `
export const Cover = styled.img`
    display: flex;
    width: 100%;
    max-width: 460px;
    border-radius: ${(props: { isReverse: boolean }) => props.isReverse ? '0 8px 8px 0' : '8px 0 0 8px'};
    justify-content: center;
    font-size: 16px;
    font-weight: 400;
    color: #000;
    `
export const Title = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 32px;
    font-weight: 700;
    color: #000;
    `
export const Subtitle = styled.h2`
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
    color: #000;
    `
export const Description = styled.p`
    display: flex;
    justify-content: center;
    text-align: justify;
    font-size: 16px;
    font-weight: 500;
    color: #000;
    `

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: ${(props: { isReverse: boolean }) => props.isReverse ? 'start' : 'end'};
    width: 100%;
    `
export const Button = styled.button`
    display: flex;
    max-width: 110px;
    border: none;
    border-radius: 16px;
    padding: 8px 24px;
    background-color: #5E17EB;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
    `