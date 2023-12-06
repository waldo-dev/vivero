'use client'

import React from 'react';

import { Searcher } from '../Searcher/Searcher';
import Link from 'next/link';
import styles from './Navbar.module.scss';

import { BottomNavigationAction } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BottomNavigation from '@mui/material/BottomNavigation';

export default function Navbar() {
  return (
  <div className={styles.container}>
    <div className={styles.section}>
      <div className={styles.content_container}>
        <Searcher />
      </div>
      <div className={styles.content_container}>
        <h1 className={styles.title}>Nombre del vivero</h1>
      </div>
      <div className={styles.icons}>
        <BottomNavigation showLabels >
          <BottomNavigationAction label="User" icon={<AccountCircleIcon />} />
          <BottomNavigationAction label="Carrito" icon={<ShoppingCartIcon />} />
        </BottomNavigation>
      </div>
    </div>
    <div className={styles.section}>
      <ul className={styles.list}>
        <li className={styles.item_list}>Flores y cubresuleos</li>
        <li className={styles.item_list}>Arbustos</li>
        <li className={styles.item_list}>Envios</li>
        <Link href='/contacto'>Contacto</Link>
      </ul>
    </div>
  </div>
  )
};