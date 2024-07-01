'use client';
import { useContext } from 'react';
import { HeaderContext } from '@/context/HeaderContext';

function useHeaderContext() {
  return useContext(HeaderContext);
}

export default useHeaderContext;
