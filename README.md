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
- For example, the products item in the sidebar has some dropdown menu which can be routed to. So we have products/all-products route, also products/new-product route, and also products/payment-methods route .

#### Routes In Detail

- / This is the index route. It links to the dashboard route.
- /products/all-products: Routes to a page that contains a table of all the products. Clicking on the id of any product on the table routes to the detail of the clicked product.
- /products/new-product: Routes to a page where a user can create details for a new product to be added to the store
- /products/payment-methods: Routes to a page which displays the list of all payment methods accepted. It can also link to a page where the user can create a new payment method.
- /customers/search: An advanced search page for a customer.
- /customers/new-transaction: For new transaction.
- /customers/list-of-transactions: A page with a table that contains all the transactions done by the user.
- /customers/history-export: A page that contains a list of recently generated files
- customers/complaints/search: A page for the advanced search of recorder customer complaints.
- /customers/list-of-complaints: A page with a table that contains all complaints registered from customers.
- /customers/complaints/reply-templates: A page that contains a template for reply to customers' complaints.
- /customers/sales-statistics: Sales statistics page.
- /customers/blacklist: A list of blacklisted customers.
- /customers/sales-settings: Numerous settings with regards to sales.
- /store/payment-methods: Store payment methods route.
- /store/add-new-method: New store payment method route.
- /store/products: A gallery of all available products.
- /store/configuration: A page for the configuration of store to the user's taste.
- /codebase/search-codes: Search page for a code or file.
- /codebase/new-base-code: Create a new base code.
- /codebase/code-list: A table for the list of codes.
- /codebase/export-code: Export of code bases
- /marketing/new-email-campaign: For creating new email campaign.
- /marketing/list-of-email-campaign: A list of all email campaigns.
- /marketing/new-shipment: Create a new shipment.
- /marketing/all-shipments: A list of all scheduled shipments.
- /ebay/connected-accounts: Connected Ebay accounts.
- /ebay/automatic-monitoring: Automatic monitorings
- /ebay/configurations: Ebay configuration page.
- /settings/layout: Layout list
- /settings/general-settings: General settings page.
- /settings/personalised-messages: User personalized messages.
- /settings/page-personalization: Page personalization.
- /settings/payment-history: All payment received.
- /settings/change-password: Change password.
- /settings/two-fa-auth: Enable/disable two factor authentication
- /settings/notifications: Notification settings.
- /settings/api: API settings
