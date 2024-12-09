import { describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { vi } from "vitest";

import App from "./App";

vi.mock("./Home", () => ({
  Home: () => <div>Home Page</div>,
}));

vi.mock("./Cart", () => ({
  Cart: () => <div>Cart Page</div>,
}));

const router = createMemoryRouter(
  [
    { path: "/", element: <div>Home Page</div> },
    { path: "/cart", element: <div>Cart Page</div> },
  ],
  { initialEntries: ["/"] }
);

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);
    screen.debug();
  });

  it("renders Home page by default", () => {
    render(<RouterProvider router={router} />);
    expect(screen.getByText(/Home Page/i)).toBeTruthy();
  });

  it("renders Cart page when navigating to /cart", async () => {
    render(<RouterProvider router={router} />);

    router.navigate("/cart");

    await waitFor(() => screen.getByText(/Cart Page/i));

    expect(screen.getByText(/Cart Page/i)).toBeTruthy();
  });
});
