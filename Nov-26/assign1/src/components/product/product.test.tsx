import { render, screen, fireEvent } from "@testing-library/react";
import ProductForm from "./product.module";

describe("ProductForm component test cases", () => {
  test("renders all input fields and the heading", () => {
    render(<ProductForm />);
    const heading = screen.getByRole("heading");
    const nameInput = screen.getByPlaceholderText("Product Name");
    const priceInput = screen.getByPlaceholderText("Price");
    const qtyInput = screen.getByPlaceholderText("Quantity");
    const button = screen.getByRole("button", { name: /get total amount/i });

    expect(heading).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(priceInput).toBeInTheDocument();
    expect(qtyInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("updates product state when input values are changed", () => {
    render(<ProductForm />);

    const nameInput = screen.getByPlaceholderText("Product Name");
    fireEvent.change(nameInput, { target: { value: "Laptop" } });
    expect(nameInput).toHaveValue("Laptop");

    const priceInput = screen.getByPlaceholderText("Price");
    fireEvent.change(priceInput, { target: { value: "500" } });
    expect(priceInput).toHaveValue(500);

    const qtyInput = screen.getByPlaceholderText("Quantity");
    fireEvent.change(qtyInput, { target: { value: "2" } });
    expect(qtyInput).toHaveValue(2);
  });

  test("displays the total amount when the button is clicked", () => {
    render(<ProductForm />);

    const priceInput = screen.getByPlaceholderText("Price");
    const qtyInput = screen.getByPlaceholderText("Quantity");
    const button = screen.getByRole("button", { name: /get total amount/i });

    fireEvent.change(priceInput, { target: { value: "500" } });
    fireEvent.change(qtyInput, { target: { value: "2" } });
    fireEvent.click(button);

    const totalAmount = screen.getByText(/total amount: 1000/i);
    expect(totalAmount).toBeInTheDocument();
  });

  test("does not display total amount initially", () => {
    render(<ProductForm />);
    const totalAmount = screen.queryByText(/total amount:/i);
    expect(totalAmount).not.toBeInTheDocument();
  });

  test("handles invalid input gracefully", () => {
    render(<ProductForm />);

    const priceInput = screen.getByPlaceholderText("Price");
    const qtyInput = screen.getByPlaceholderText("Quantity");
    const button = screen.getByRole("button", { name: /get total amount/i });

    fireEvent.change(priceInput, { target: { value: "abc" } });
    fireEvent.change(qtyInput, { target: { value: "def" } });
    fireEvent.click(button);

    const totalAmount = screen.getByText(/total amount: 0/i);
    expect(totalAmount).toBeInTheDocument();
  });
});
