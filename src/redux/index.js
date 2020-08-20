import { createStore } from 'redux';
import throtlle from 'lodash/throttle';

import RootReducer from './rootReducer';

export default function() {
    const store = createStore(RootReducer);

    store.subscribe(
        throtlle(() => {
          console.log('Persistir no storage');
        }, 5000),
      );
    
    return store;
};
