import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import App from "../App";
import UserModule from "./Emp.module";

const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock("axios");

describe("UserModule Component", () => {

    test('Add user button should render without mocking', async () => {
        const queryClient = new QueryClient();

        render(
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        );

        await waitFor(() => {
            expect(screen.getByRole('button', { name: /Add User/i })).toBeInTheDocument();
        })
    })

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

    test('Buttons should be render as well with the lists', async () => {
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

        await waitFor(() => {
            expect(screen.getByRole('button', { name: /Update/i })).toBeInTheDocument();
        })
        expect(screen.getByRole('button', { name: /Delete/i })).toBeInTheDocument();
    })
    
    test('Add Button should add a new User to the server', async () => {
        mockedAxios.post.mockResolvedValueOnce({
            data: {
                name: "Ravi Kumar",
                email: "ravi@gmail.com",
                dept: "Industry",
                role: "Mechanical Engineer",
            },
        });
    
        mockedAxios.get.mockResolvedValueOnce({
            data: [
                { name: "Ravi Kumar", email: "ravi@gmail.com", dept: "Industry", role: "Mechanical Engineer" },
            ],
        });
    
        const queryClient = new QueryClient();
    
        render(
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        );
    
        const input1 = screen.getByPlaceholderText('Enter name');
        const input2 = screen.getByPlaceholderText('Enter email');
        const input3 = screen.getByPlaceholderText('Enter department');
        const input4 = screen.getByPlaceholderText('Enter role');
    
        fireEvent.change(input1, { target: { value: "Ravi Kumar" } });
        fireEvent.change(input2, { target: { value: "ravi@gmail.com" } });
        fireEvent.change(input3, { target: { value: "Industry" } });
        fireEvent.change(input4, { target: { value: "Mechanical Engineer" } });
    
        fireEvent.click(screen.getByRole('button', { name: "Add User" }));
    
        await waitFor(() => {
            expect(screen.getByText("Ravi Kumar")).toBeInTheDocument();
        });
        expect(screen.getByText("ravi@gmail.com")).toBeInTheDocument();
        expect(screen.getByText("Industry")).toBeInTheDocument();
        expect(screen.getByText("Mechanical Engineer")).toBeInTheDocument();
    });    
});
