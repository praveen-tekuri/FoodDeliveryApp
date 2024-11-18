import { screen, render, fireEvent } from "@testing-library/react";
import Header from "../components/Header";
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

describe("testing header component", () => {
    it('should render header component with a login button', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        );
        // const heading = screen.getByRole('button');
        const heading = screen.getByRole('button', {name: 'Login'});
        expect(heading).toBeInTheDocument();
    })
    it('should render header component with cart item with 0', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        );
        const heading = screen.getByText('Cart - (0)');
        expect(heading).toBeInTheDocument();
    })
    it('should render header component with cart item', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        );
        const heading = screen.getByText(/Cart/);
        expect(heading).toBeInTheDocument();
    })
    it('should change Login button to Logout on click', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        );
        const loginButton = screen.getByRole("button", {name: 'Login'});
        fireEvent.click(loginButton);
        const logoutButton = screen.getByRole("button", {name: "Logout"});
        expect(logoutButton).toBeInTheDocument();
    })
})