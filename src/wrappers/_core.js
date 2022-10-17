import PropTypes from 'prop-types';
import { QueryClient, QueryClientProvider } from 'react-query';
import MultiProvider from "../config/multi-provider";
import Provider from '../contexts';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function Core({ children, auth }) {
  return (
    <QueryClientProvider client={queryClient}>
      <MultiProvider
        providers={[
          <Provider.ActivityProvider key={1} />,
          <Provider.TodoProvider key={2} />,
        ]}
      >
        {children}
      </MultiProvider>
    </QueryClientProvider>
  );
}


{/* <AuthProvider auth={auth}>

{children}

</AuthProvider> */}

Core.propTypes = {
  children: PropTypes.node,
  auth: PropTypes.object.isRequired,
};

export default Core;
