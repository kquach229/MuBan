import CategoriesGrid from '@/components/CategoriesGrid';
import Hero from '@/components/Hero';
import { prisma } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
export default async function Home() {
  const categories = [
    { id: 1, category: 'Portfolio & Agency' },
    { id: 2, category: 'Technology' },
    { id: 3, category: 'Blog & Tutorial' },
    { id: 4, category: 'Professional Services' },
    { id: 5, category: 'Real Estate' },
    { id: 7, category: 'Retail' },
  ];

  const user = await currentUser();

  const loggedInUser = await prisma.user.findUnique({
    where: {
      email: user?.emailAddresses[0]?.emailAddress,
    },
  });

  if (!loggedInUser) {
    await prisma.user.create({
      data: {
        name: `${user?.firstName} ${user?.lastName}`,
        email: user?.emailAddresses[0]?.emailAddress,
        purchasedTemplates: {},
      },
    });
  }

  return (
    <div>
      <Hero />
    </div>
  );
}
