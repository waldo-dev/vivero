'use client';
import React from 'react';
import styles from '@/components/Searcher/Searcher.module.scss'

export function Searcher() {

  return (
    <div>
      <label htmlFor="" className={styles.icon}></label>
      <input type="text" className={styles.input} placeholder='Buscar'/>
    </div>
  )
}