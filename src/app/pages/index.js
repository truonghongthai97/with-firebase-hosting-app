import React from 'react';

import HomePage from '../containers/HomePage';

const HomePageContainer = () => <HomePage />;
HomePageContainer.getInitialProps = async ({ query }) => {
  return {};
};
export default HomePageContainer;
