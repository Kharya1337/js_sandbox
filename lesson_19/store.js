import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index';
import loggerMiddleware from './middlewares/logger';
import countUpdaterModdleware from './middlewares/count_updater';
import storageMiddleware from './middlewares/storage';
import deduplikatorMiddleware from './middlewares/deduplicator'

export const Store = createStore(
    reducer,
    applyMiddleware(
        loggerMiddleware,
        countUpdaterModdleware,
        storageMiddleware,
        deduplikatorMiddleware,
        )
);


