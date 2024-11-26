import { render, screen, fireEvent } from '@testing-library/react';
import SignUpForm from './signup.module';

describe('SignUpForm Component', () => {
  test('renders the signup form', () => {
    render(<SignUpForm />);
    expect(screen.getByRole('heading', { name: /sign up form/i })).toBeInTheDocument();
  });

  test('shows error if username is not provided', () => {
    render(<SignUpForm />);
    fireEvent.click(screen.getByRole('button', { name: /sign up/i }));
    expect(screen.getByText('Username is required')).toBeInTheDocument();
  });

  test('shows error if email is not provided', () => {
    render(<SignUpForm />);
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'user' } });
    fireEvent.click(screen.getByRole('button', { name: /sign up/i }));
    expect(screen.getByText('Email is required')).toBeInTheDocument();
  });

  test('shows error if password is not provided', () => {
    render(<SignUpForm />);
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'user' } });
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'user@example.com' } });
    fireEvent.click(screen.getByRole('button', { name: /sign up/i }));
    expect(screen.getByText('Password is required')).toBeInTheDocument();
  });

  test('displays success alert when all fields are valid', () => {
    render(<SignUpForm />);
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'user' } });
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'user@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });

    jest.spyOn(window, 'alert').mockImplementation(() => {}); // Mock alert

    fireEvent.click(screen.getByRole('button', { name: /sign up/i }));
    expect(window.alert).toHaveBeenCalledWith('Signup successful!');
  });
});
