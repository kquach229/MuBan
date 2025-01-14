import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();
    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email and name are required fields' },
        { status: 400 }
      );
    }
    const user = await prisma.user.create({
      data: {
        email,
        name,
      },
    });
    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: 'Someting went wrong' }, { status: 500 });
  }
}
