import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import VehicleRegistrationForm from "./VehicleRegistrationForm";

test('Should return valid heading Vehicle Registration Form', () => {
    render(<VehicleRegistrationForm />);
    const heading = screen.getByTestId("heading").textContent;

    expect(heading).toBe("Vehicle Registration Form");
})

test('Should return error if form name is not filled', async () => {
    render(<VehicleRegistrationForm />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    await waitFor(() => {
        const error = screen.getByText('Owner name is required');
        expect(error).toBeInTheDocument();
    });
})

test('Should return error if form contact is not filled', async () => {
    render(<VehicleRegistrationForm />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    await waitFor(() => {
        const error = screen.getByText('Contact number is required');
        expect(error).toBeInTheDocument();
    });
})

test('Should return error if contact number not have length 10', async () => {
    render(<VehicleRegistrationForm />);

    const inputName = screen.getByPlaceholderText('contact-number');
    fireEvent.change(inputName, { target: { value: '987' } });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    await waitFor(() => {
        const error = screen.getByText('Please enter a valid 10-digit number');
        expect(error).toBeInTheDocument();
    });
})

test('Should return not error if contact number length is 10', async () => {
    render(<VehicleRegistrationForm />);

    const inputName = screen.getByPlaceholderText('contact-number');
    fireEvent.change(inputName, { target: { value: '9876543210' } });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    await waitFor(() => {
        const text = screen.queryByText('Please enter a valid 10-digit number');
        expect(text).not.toBeInTheDocument();
    });
    expect(inputName).toHaveValue('9876543210');
})

test('Should return no error while name form is filled', async () => {
    render(<VehicleRegistrationForm />);

    const inputName = screen.getByPlaceholderText('Name');
    fireEvent.change(inputName, { target: { value: 'John Doe' } });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    await waitFor(() => {
        const error = screen.queryByText('Owner name is required');
        expect(error).not.toBeInTheDocument();
    });
})