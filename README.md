# Welcome to the Front-End Developer Test!

This practical test is designed to evaluate ability to build a functional React.js application using TypeScript. 

## Product Catalog Application
This is a simple **Product Catalog** application where users can browse products, add items to shopping cart, filter items by category and sort items by price. 

## Getting started
- Clone this repository and run `npm install` to install the dependencies.
- Run `npm run dev` to start the development server.

## To Do:
### Setup the Project:
- [ ] Clone the project.
- [ ] Install the dependencies using `npm install`.
- [ ] **!!!Checkout develop branch**.
- [ ] Start the development server using `npm run dev`.
- [ ] Create the base layout for the application (header, footer, main content).
- [ ] Set up React Router for navigation between pages. (`npm install react-router-dom`)
- [ ] Create a global context for managing the shopping cart state.
- [ ] Implement basic routing for the Home Page and Shopping Cart Page. (`/`, `/cart`)
- [ ] Add basic styling to the application using CSS or a CSS framework. 

### Create the Home Page:
- [ ] Create a table or grid of cards to display the list of products.
- [ ] Fetch the product data from the API (https://fakestoreapi.com/products).
- [ ] Display the product details (image, name, price, category).
- [ ] Add a button to add the product to the shopping cart.
- [ ] Add a button to remove the product from the shopping cart.
- [ ] Implement filtering by category and sorting by price (asc/desc).
### Create the Shopping Cart Page:
- [ ] Display the list of products added to the shopping cart.
- [ ] Allow users to change the quantity of products in the cart.
- [ ] Allow users to remove products from the cart.
- [ ] Show the total price for all products in the cart.
- [ ] Add a button to clear all products from the cart.

### Bonus:
- [ ] Anything you want to add to impress us! Consider the bonus points mentioned above.

### Examples:

**List of products example**:
| Name                        | Category ^ | Price ^ | Actions        |
|-----------------------------|------------|---------|----------------|
| Solid Gold Petite Micropave | jewelery   | $168    | (-) / (+) |

**List of added products in shopping cart example**:
| Name                        | Category ^ | Price ^ | Quantity | Actions            |
|-----------------------------|------------|---------|----------|--------------------|
| Solid Gold Petite Micropave | jewelery   | $168    | 2        | (-) / (+) / Delete |


### Resources:
- [React Documentation](https://react.dev/learn)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [React Router Documentation](https://reactrouter.com/en/main/start/tutorial)
- [React Context API](https://react.dev/learn/passing-data-deeply-with-context)
- [Fake Store API](https://fakestoreapi.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest Testing Framework](https://jestjs.io/docs/getting-started)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)
