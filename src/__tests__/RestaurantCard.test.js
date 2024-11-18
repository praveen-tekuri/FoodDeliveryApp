import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";


it("should render RestaurantCard Component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>)
    const name = screen.getByText("ZAZA Mughal Biryani");
    expect(name).toBeInTheDocument();
})