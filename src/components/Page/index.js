// == Import : npm
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';


// == Import : local
import HomePage from 'src/components/Page/HomePage';
import UserPage from 'src/components/Page/UserPage';
import SearchPage from 'src/containers/Page/SearchPage';
import InscriptionPage from 'src/containers/Page/InscriptionPage';
import ContactPage from 'src/components/Page/ContactPage';
import AddPlacePage from 'src/containers/Page/AddPlacePage';

// == Composant
const Page = ({
  searchFormData,
  setSearchFormData,
}) => (
  <>
    <Switch>
      <Route path="/" exact>
        <HomePage
          searchFormData={searchFormData}
          setSearchFormData={setSearchFormData}
        />
      </Route>

      <Route path="/inscription" exact>
        <InscriptionPage />
      </Route>

      <Route path="/search" exact>
        <SearchPage
          searchFormData={searchFormData}
          setSearchFormData={setSearchFormData}
        />
      </Route>
      <Route path="/user" exact>
        <UserPage />
      </Route>

      <Route path="/contact" exact>
        <ContactPage />
      </Route>
      <Route path="/ajouter" exact>
        <AddPlacePage />
      </Route>
    </Switch>
  </>
);

// == Export
export default withRouter(Page);
