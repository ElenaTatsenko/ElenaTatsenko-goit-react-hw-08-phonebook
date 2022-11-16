import styled from "@emotion/styled";

export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;`
    
export const ListItem = styled.li`
    width: 300px;
    text-align: center;
    margin-bottom: 15px;
    background: linear-gradient(#302f32, #89b423e9, #302f32);
    padding: 15px;
    border-radius: 6px;
    &:hover {
        transform: scale(1.02);
}`
export const ListEl = styled.p`
    margin-bottom: 10px;
    font-size: 20px;
`

export const ListSpan = styled.span`
    font-weight: bolder;
    font-size: 20px;
    margin-right: 10px;
`
export const ListItemBtn = styled.button`
    font-size: 15px;
    width: 160px;
    height: 30px;
    border-radius: 6px;
    background: linear-gradient(#302f32, #91e6f7e9, #302f32);
    text-transform: uppercase;
     &:hover {
        background: linear-gradient(#302f32, #b319d9e9, #302f32);
        transform: scale(1.2);
}
`
    

