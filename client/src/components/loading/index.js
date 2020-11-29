import React from 'react'
import { Spinner } from './styles/loading';

export default function Loading({ children }) {
  return <Spinner>{children}</Spinner>;
};