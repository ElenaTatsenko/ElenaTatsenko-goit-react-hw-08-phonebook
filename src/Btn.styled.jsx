import styled from "@emotion/styled";

export const Button = styled.button`
  display: block;
  font-size: 18px;
  width: 200px;
  height: 40px;
  border-radius: 6px;
  background: linear-gradient(#302f32, #91e6f7e9, #302f32);
  text-transform: uppercase;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  &:hover,
  &:focus {
    background: linear-gradient(#302f32, #b319d9e9, #302f32);
    transform: scale(1.2);
  }
`
 