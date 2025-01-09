import { prisma } from '@/lib/prisma';

export async function POST(request, response) {
  try {
    const { email, name } = await request.json();
    if (!email || !name) {
      return response
        .status(400)
        .json({ error: 'Email and name are required fields' });
    }
    const user = await prisma.user.create({
      data: {
        email,
        name,
      },
    });
    response.status(201).json({ user });
  } catch (error) {
    console.error(error);

    response.status(500).json({ error: 'Someting went wrong' });
  }
}
