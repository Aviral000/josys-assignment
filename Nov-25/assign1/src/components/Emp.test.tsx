import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
// import App from "../App";
import UserModule from "./Emp.module";

const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock("axios");

describe("UserModule Component", () => {
    test("renders user data correctly", async () => {
        mockedAxios.get.mockResolvedValueOnce({
        data: [
            { id: 1, name: "Aviral Malik", email: "avi@gmail.com", dept: "Industry", role: "Software engineer - 2" },
        ],
        });

        const queryClient = new QueryClient();

        render(
        <QueryClientProvider client={queryClient}>
            <UserModule />
        </QueryClientProvider>
        );

        // console.log(screen.getByText("Aviral Malik"));

        await waitFor(() => {
        expect(screen.getByText("Aviral Malik")).toBeInTheDocument();
        });
        expect(screen.getByText("avi@gmail.com")).toBeInTheDocument();
        expect(screen.getByText("Industry")).toBeInTheDocument();
        expect(screen.getByText("Software engineer - 2")).toBeInTheDocument();
    });

    // test('', () => {
      
    // })
    
});
