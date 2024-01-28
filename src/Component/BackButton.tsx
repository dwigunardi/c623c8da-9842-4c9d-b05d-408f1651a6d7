'use client'
import { BackIcon } from '@/Assets/Icon/BackIcon';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function BackButton() {
    const router = useRouter();
  return (
    <Button onPress={() => router.back()} startContent={<BackIcon width={20} height={20}/>} variant='shadow' color='primary' className='text-white'>
      Back
    </Button>
  )
}
