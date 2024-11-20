/*
React Query is a library for managing server state in React applications. It simplifies data fetching, caching, 
synchronization, and updating UI with server data. React Query helps in reducing boilerplate code and provides 
features like:

Automatic caching and background fetching.
Automatic updates when data changes on the server.
Powerful dev tools for debugging server state.
Optimistic updates for a better user experience.

*/

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // similar to context and provider
import FetchData from './components/FetchData';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-center text-2xl font-bold">React Query Example</h1>
        <FetchData />
      </div>
    </QueryClientProvider>
  );
};

export default App;
