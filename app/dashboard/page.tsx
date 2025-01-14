import { prisma } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
import { div } from 'motion/react-client';
import React from 'react';
import { ITemplate } from '../templates/page';
import TemplateCard from '@/components/TemplateCard';

const DashboardPage = async () => {
  const user = await currentUser();
  const prismaUser = await prisma.user.findUnique({
    where: { email: user?.emailAddresses[0].emailAddress },
  });

  if (!user || !prismaUser) {
    return <div>Sign In to view your templates</div>;
  }

  return (
    <div className='base-page-styles'>
      <div className='container md:text-left'>
        <h3 className='header-text'>Welcome {user?.firstName}!</h3>
        <h5 className='sub-heading-text'>
          Your purchased templates can be found below
        </h5>
        <div className='mt-52 text-center text-lg text-background/50'>
          {!prismaUser.purchasedTemplates ? (
            'You havent purchased anything yet'
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5'>
              {prismaUser.purchasedTemplates.map((template: ITemplate) => (
                <TemplateCard template={template} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
