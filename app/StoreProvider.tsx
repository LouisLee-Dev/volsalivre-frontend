// app/providers.tsx
'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '@/lib/store';
// import "@/app/globals.css";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
