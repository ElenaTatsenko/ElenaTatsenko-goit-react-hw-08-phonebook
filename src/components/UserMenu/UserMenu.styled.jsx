import styled from "@emotion/styled";

export const UserMenuContainer = styled.div`
text-align: center`

export const UserContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const UserMenuBtn = styled.button`
    font-size: 17px;
    background: inherit;
    cursor: pointer;
    border: none;
    
    margin-bottom: 8px;
     &:hover,
     &:focus {
        font-weight: 700;
        transform: scale(1.2);}
`
export const UserMenuItem = styled.p`
    font-size: 18px;
`