import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import Image from 'next/image';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from '@clerk/nextjs';

const AppSidebar = () => {
  return (
    <Sidebar side='left' variant='sidebar'>
      <SidebarHeader className='p-[1rem] mt-[1rem] w-[65] h-[65]'>
        <Link href={'/'}>
          <Image width={65} height={65} src={'/moban_logo.svg'} alt='logo' />
        </Link>
      </SidebarHeader>
      <SidebarContent className='p-[1rem]'>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className='grid gap-3'>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href='/'>Home</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href='/about'>About</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href='/templates'>Templates</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href='/services'>Services</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem className='ml-2'>
                <SignedIn>
                  <SignOutButton>Sign Out</SignOutButton>
                </SignedIn>
              </SidebarMenuItem>
              <SidebarMenuItem className='ml-2'>
                <SidebarMenuButton asChild>
                  <SignedOut>
                    <SignInButton>Sign In</SignInButton>
                  </SignedOut>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;
