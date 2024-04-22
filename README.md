# How to run this project locally

### Steps

- Fork or download the repository
- Navigate to the root folder
- Run "npm i" to install all dependencies used in the project
- Run npm run dev to start the project in dev mode (The project will most likely run on port 5173)

### Routes
- React Router is the routing mechanism used in this project.
- The routes associated with this project is located in the pages folder which itself can be found in the src folder.
- There are two main routes; the login route and the main interface route.
- The main interface route serves as a parent route for all other routes defined in the project.
- Within this pages folder are other subfolders (e.g codebases, customers, e.t.c)
- This subfolders represent navigations in the hamburger menu (for mobile devices) and sidebar for items with dropdown menu.
- For example, the products item in the sidebar has some dropdown menu which can be routed to. So we have products/all-products route, also products/new-product route, and also  products/payment-methods route  .
