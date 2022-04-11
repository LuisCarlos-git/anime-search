import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Header from '.';

describe('<Header />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Header />);
  });
});
