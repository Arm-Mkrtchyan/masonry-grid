import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import Home from "../src/pages/home"

test("Renders the main page", () => {
  render(<Home />)
  expect(true).toBeTruthy()
})