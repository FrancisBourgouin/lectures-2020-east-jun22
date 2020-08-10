import React from 'react';
import App from './App';
import { render, waitForElement, prettyDOM, fireEvent } from '@testing-library/react';

describe("Testing initial version of app", () => {
  it('renders the title properly', () => {
    const { getByText, getAllByText } = render(<App />);
    const titlez = getAllByText(/Weather Magic/i);
    // console.log(title)
    for (const title of titlez) {
      expect(title).toBeInTheDocument();
    }
  });

  it('should show Toronto when clicking on the toronto button', async () => {
    const { getByText, queryByText, getByTestId, container, findByText } = render(<App />)

    console.log(prettyDOM(container))

    const cityButton = getByTestId("tor-button")
    expect(cityButton).toBeInTheDocument()

    fireEvent.click(cityButton)


    const result = await findByText("Right now in Toronto")

    console.log(prettyDOM(container))

  })

  it('should show Toronto when clicking on the toronto button', async () => {
    const { getByText, queryByText, getByTestId, container, findByText } = render(<App />)

    console.log(prettyDOM(container))

    const cityButton = getByTestId("mtl-button")
    expect(cityButton).toBeInTheDocument()

    fireEvent.click(cityButton)


    const result = await findByText("Right now in Montréal")

    expect(result).toBeInTheDocument()

  })
})
