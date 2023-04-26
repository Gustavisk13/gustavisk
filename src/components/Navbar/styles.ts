
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    height: 80px;
    padding: 0;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    `
export const Logo = styled.div`
    display: flex;
    flex: 2;
    align-items: center;
    cursor: pointer;
    
    `
export const Spacer = styled.div`
    display: flex;
    flex: 3;
    `
export const Image = styled.img`
    width: 180px;
    height: 180px;
    `
export const Icon = styled.img`
    width: 22px;
    height: 22px;
    cursor: pointer;
    `

export const Nav = styled.nav`
    display: flex;
    flex: 2;
    gap: 34px;
    align-items: center;
    font-size: 22px;
    font-weight: 500;
    `
export const NavItem = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    `

export const NavOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 14px;
    width: 100%;
    flex: 1;
    `
