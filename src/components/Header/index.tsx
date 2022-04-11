import * as Styled from './styles';

import { IRON_MAN_ICON } from 'assets/export-icons';

const Header = () => (
  <Styled.Wrapper>
    <Styled.LogoContainer>
      <Styled.Logo src={IRON_MAN_ICON} alt="iron man icon" />
    </Styled.LogoContainer>
  </Styled.Wrapper>
);

export default Header;
