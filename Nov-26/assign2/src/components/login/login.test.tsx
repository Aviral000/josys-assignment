import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './login.module';

describe('LoginForm Component', () => {
  test('renders LoginForm with required elements', () => {
    render(<LoginForm />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('User ID')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  test('displays error if User ID is not supplied', () => {
    render(<LoginForm />);
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    expect(screen.getByText('User ID is required')).toBeInTheDocument();
  });

  test('displays error if Password is not supplied', () => {
    render(<LoginForm />);
    fireEvent.change(screen.getByPlaceholderText('User ID'), { target: { value: 'admin' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    expect(screen.getByText('Password is required')).toBeInTheDocument();
  });

  test('displays error for invalid credentials', () => {
    render(<LoginForm />);
    fireEvent.change(screen.getByPlaceholderText('User ID'), { target: { value: 'wrongUser' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'wrongPass' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
  });

  test('logs in successfully with correct credentials', () => {
    render(<LoginForm />);
    fireEvent.change(screen.getByPlaceholderText('User ID'), { target: { value: 'admin' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'admin123' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    expect(screen.getByText('Welcome, Admin!')).toBeInTheDocument();
  });
});
