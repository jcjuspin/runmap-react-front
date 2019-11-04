import {
  COLLECT_USERS_DATA,
  changeUsersData,
} from 'src/store/reducer';
import axios from 'axios';

import { baseUri, allUsers } from 'src/store/vars_route';
import { dispatch } from 'rxjs/internal/observable/pairs';

const usersDataMiddleware = (store) => (next) => (action) => {
  console.log('Je suis le usersDataMiddleware, et je laisse passer cette action: ', action);
  next(action);

  // eslint-disable-next-line default-case
  switch (action.type) {
    case COLLECT_USERS_DATA: {
      axios.get(`${baseUri}${allUsers}`)
        .then((response) => {

          console.log('réponse de mr API : ', response.data);
          store.dispatch(changeUsersData(response.data));
        })
        .catch((error) => {
        })
        .finally(() => {
        });
    }
  }
};

export default usersDataMiddleware;
