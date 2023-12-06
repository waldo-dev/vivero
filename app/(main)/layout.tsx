import React from 'react';
import Navbar from '@/components/Navbar/Navbar';

export default function Home({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}