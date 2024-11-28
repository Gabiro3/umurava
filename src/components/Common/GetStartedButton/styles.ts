'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const LinkTo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5.25rem;
  background: #2b70f0;
  color: var(--white);
  font-size: 1rem;
  font-weight: 600;
`;
