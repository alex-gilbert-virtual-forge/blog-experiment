import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #58418d7e 0% 0% no-repeat padding-box;
  opacity: 1;
`;

export const LogoContainer = styled.div`
  padding-left: 38px;
  height: 54px;
  width: 230px;
  color: #bb80ff;
  display: flex:
  flex-direction: column;
  font-size: 22px;

`;

export const OptionsContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OptionLink = styled.div`
  padding: 0px 15px;
  cursor: pointer;
  font-size: 20px;
  color: white;
`;
