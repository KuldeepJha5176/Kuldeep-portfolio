import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react'
import Container from '../Container';

const Footer = () => {
  return (
    <Container className='flex justify-between border-t border-neutral-100 p-3 dark:border-neutral-800'>
      <p className='text-sm text-neutral-500 dark:text-neutral-400'>
      Built with ❤️ by Kuldeep Jha
      </p>
        <div
        className="flex items-center gap-4 justify-center">
            <Link href={"https://x.com/Jha__Rana"}>
            <IconBrandX className='size-4 text-neutral-500 hover:text-neutral-700' />
            </Link>

            <Link href={"https://github.com/KuldeepJha5176"}>
            <IconBrandGithub className='size-4 text-neutral-500 hover:text-neutral-700' />
            </Link>
            <Link href={"https://www.linkedin.com/in/kuldeep-jha-304985249/"}>
            <IconBrandLinkedin className='size-4 text-neutral-500 hover:text-neutral-700' />
            </Link>
        </div>
      
      
    </Container>
  )
}

export default Footer;
