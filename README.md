## Softplan Frontend Challenge - Countries Information

This is an app built for SoftPlan Frontend Challenge.

[Demo](https://ccasci-countries-challenge.netlify.app/)

[Code](https://github.com/carloscasciano/countries_frontend_challenge)

### Gifs

App:

![App](https://media.giphy.com/media/lnPfpbN3JNUocUhGfV/giphy.gif)

Changing Data:

![Changing Data](https://media.giphy.com/media/UShp6QvbgkimRxUYuN/giphy.gif)

### Briefing
- [X] Create a cards list showing each Country, flag and Capital
- [X] User can search specific countries
- [X] User can go to a different page with any Country Details
- [X] Country details includes: Flag, Domain, Capital, Area, Population
- [X] Form can change and save different information on client-side 

### Technical Restrictions
- [X] create-react-app
- [X] Redux
- [X] React Router
- [X] @testing-library/react

### Super Front Challenge
- [X] Map with Country and 5 closest neighbours (Used React Simple Maps)

### Structure

- UseEffect handles function that queries API via axios and handle actions to update state.
- Dashboard component checks store state to render dashboard components.
- User can click on any card to access different pages via Router.
- Details page use url information to render correct country information.
- User can change basic information that directly handle actions to change current store state.
- Store state is saved until app is refreshed, user can navigate via pages to other countries and state is kept.

### Decisions

- Over vs. Underfetching
    - Decided to make only one API call with all countries information for store, since there were no significant load time difference between calling GQL query with everything needed and calling only basic country info. A little bit of overfetching, but I assumed it was ok for this project scope.
- Saving on client side
    - Could have used local storage to persist data on client side, but for the sake of simplicity, just maintained store state after changes.
- Styling with MUI & Styled Components
    - Focus on a quick styling, basic positioning and layout with Styled Components, Typography and inputs with Material UI
    
### Extras

- [X] Project on any URL - Deployed to Netlify, check Demo.
- [ ] Pipeline on GitLab - Never used the tool, chose not to invest time trying to learn it in such short notice.
- [ ] 100% coverage on unit testing - [PARTIAL] Tests only cover initial fetch and rendering, don't cover all renderings.
- [ ] Substitute Redux by Apollo Client Local State Management - Read the docs, did some small testing on another summy project but chose Redux for familiarity and time management.
