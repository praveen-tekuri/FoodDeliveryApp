## FoodDeliveryApp

### 29082024
1. Created basic setup with heading using javascript
    - created in-progress branch
    - initialzed package.json
    - installed parcel bundler
    - updated scripts in package.json to execute the application using npm start with parcel
2. Installed react, react-dom packages and configured the application to render the UI
3. Installed tailwindCSS, Created first AppLayout Component and applied tailwindCSS styles
4. Installed testing libraries
    - React testing library
    - jest and other required libraries
    - configuration
    - created first component
    - unit testing -> Header component
5. Routing Installation & configuration
### 15112024
1. Displaying the restaurant cards with hardcoded data
    - props
    - destructuring
    - optional chaining (?.)
    - concatenation (cloudinary img)
    - unique keys
2. File Structure
    - components
        - RestaurantCard.js
    - utils
        - constants.js (CDN_URL, LOGO_URL)
        - mockData.js (hardcoded restaurant data)
3. imports & exports
    - default exports
    - named exports
4. functionality
    - filter (avgRating > 4.5)
        - useState hook
5. diff & reconciliation algorithm, react fiber
6. Microservices
7. fetching the live data
    - useEffect
        - fetch
    - conditional rendering
    - loading
    - shimmer UI
    - ternary operator (? :)
8. Login -> Logout (useState)
9. Search functionality
    - fitler
    - input -> value, onChange()
    - button -> onClick -> filter and update
    - fitleredList 
10. Dynamic routing (path='/restaurants/:resId')
    - Product API
    - useParams hook
    - Link
### 16112024
1.Optimization
    - single responsibility
    - customHook -> useRestaurantMenu -> fetchData
    - customHook -> useOnlineStatus -> online status
    - bundling/chunking/code splitting/lazy loading/on demand loading
      - const CmpName = lazy(() => import("./components/CmpName")) // dynamic import
      - <Suspense fallback={<h1>Loading...</h1>}><CmpName/></Suspense>
2.Data is the new oil
    - higher order component
        - display restaurant availability status on each card
    - display product categories
        - accordion
        - categories filter
        - devtools
        - state lifting: RestaurantCategory -> RestaurantMenu
          - controlled and uncontrolled components
          - RestaurantMenu will control the state of all RestaurantCategory
        
### Commands
- git clone branchName
- cd branchName
- git checkout - branchName (creates a new branch and switching to it)
- npm init - initializes package.json
- npm install -D parcel - gets parcel package into app
- npm install react react-dom
- npm install -D tailwindcss postcss
- npx tailwindcss init
- npm i -D @testing-library/react @testing-library/dom
- npm install -D jest
- npm init jest@latest
- npm install --D babel-jest @babel/core @babel/preset-env
- npm install --D @babel/preset-react
- npm i -D jest-environment-jsdom
- npm i -D @testing-library/jest-dom
- npm i react-router-dom
### Sources
**Testing**
- [tailwindCSS](https://tailwindcss.com/docs/guides/parcel)
- [RTL](https://testing-library.com/docs/react-testing-library/intro)
- [jest](https://jestjs.io/docs/getting-started)
- [Babel-preset-react](https://babeljs.io/docs/babel-preset-react)
- [disable Babel transpilation in parcel](https://parceljs.org/languages/javascript/)
- [jest-environment-jsdom](https://jestjs.io/docs/next/tutorial-jquery)
- [jest-dom](https://testing-library.com/docs/ecosystem-jest-dom/)
- [file structure](https://legacy.reactjs.org/docs/faq-structure.html)
- [window online event](https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event)


