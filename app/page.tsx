import Hero from '@/components/Hero';
import { prisma } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
export default async function Home() {
  const user = await currentUser();

  // only execute if user is signed in
  if (user !== null) {
    // find whether or not current signed in user exists in prisma
    const existingUser = await prisma.user.findUnique({
      where: {
        email: user?.emailAddresses[0].emailAddress,
      },
    });

    // if not, then create a user record in prisma
    if (!existingUser) {
      await prisma.user.create({
        data: {
          name: `${user?.firstName} ${user?.lastName}`,
          email: user?.emailAddresses[0]?.emailAddress,
          purchasedTemplates: {},
        },
      });
    }
  }

  return (
    <div>
      <Hero />
    </div>
  );
}
