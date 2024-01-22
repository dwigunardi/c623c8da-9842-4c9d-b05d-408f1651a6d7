'use client'
import React from 'react'
import { ThemeProvider, useTheme } from 'next-themes'

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return  <ThemeProvider attribute='class' defaultTheme='dark' themes={['light', 'dark']}>{children}</ThemeProvider>
}