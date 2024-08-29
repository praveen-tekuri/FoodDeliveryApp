import { screen, render } from "@testing-library/react";
import Header from "../components/Header";
import '@testing-library/jest-dom'

describe("testing header component", () => {
    it('should render header component with heading', () => {
        render(<Header/>);
        const heading = screen.getByText('Header Component');
        expect(heading).toBeInTheDocument();
    })
})