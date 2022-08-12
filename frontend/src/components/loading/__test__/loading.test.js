import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Loading } from "../loading";

afterEach(cleanup); 

describe("Loading component is loaded", () => {
  it("renders correctly", () => {
    const {getByTestId} = render(<Loading />);
    expect(getByTestId('barloader-container')).toContainElement(getByTestId('barLoader'));
  });
});