import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='base-page-styles w-full'>
      <div className='container flex flex-col items-center w-full mx-auto gap-5'>
        <div className='tracking-wide text-left text-white/70 text-5xl'>
          Sign In
        </div>
        <SignIn />
      </div>
    </div>
  );
}
