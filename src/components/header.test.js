import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from './header';

test('testing library test', () => {
  const { getByText } = render(<Header siteTitle="Default Starter" />);
  expect(getByText('Default Starter')).toBeInTheDocument();
});

test('renders correctly', () => {
  const tree = renderer.create(<Header siteTitle="Default Starter" />).toJSON();
  expect(tree).toMatchSnapshot();
});
