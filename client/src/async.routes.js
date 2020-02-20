import {lazy} from 'react';

export const AsyncHome = lazy(() =>
  import('./pages/HomePage'),
);

export const AsyncUsers = lazy(() =>
  import('./pages/UsersPage'),
);

export const AsyncUsersDetail = lazy(() =>
  import('./pages/UsersDetailPage'),
);


