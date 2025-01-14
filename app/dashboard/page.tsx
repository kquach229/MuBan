import { prisma } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
import { div } from 'motion/react-client';
import React from 'react';
import { ITemplate } from '../templates/page';
import TemplateCard from '@/components/TemplateCard';
import { SignInButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

const DashboardPage = async () => {
  const user = await currentUser();

  // if no prisma user, create it here

  if (!user) {
    return (
      <div className='base-page-styles'>
        <div className='container'>
          <h5 className='sub-heading-text'>Sign In to view your templates</h5>
          <div className='mt-5'>
            <SignInButton>
              <Button>Sign In</Button>
            </SignInButton>
          </div>
        </div>
      </div>
    );
  }

  const userEmail = user.emailAddresses[0]?.emailAddress;
  const userName = `${user.firstName} ${user.lastName}`;

  // find or create  user in prisma

  await prisma.user.upsert({
    where: { email: userEmail },
    update: {},
    create: {
      name: userName,
      email: userEmail,
      purchasedTemplates: {},
    },
  });

  return (
    <div className='base-page-styles'>
      <div className='container md:text-left'>
        <h3 className='header-text'>Welcome {user?.firstName}!</h3>
        <h5 className='sub-heading-text'>
          Your purchased templates can be found below
        </h5>
        <div className='mt-52 text-center text-lg text-background/50'>
          You havent purchased anything yet
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
