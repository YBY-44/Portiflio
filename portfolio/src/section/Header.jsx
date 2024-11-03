import { ThemeToggle } from '@/selfcomp/ThemeToggle';
import { Name } from '@/selfcomp/Name';
import { HeaderLink } from '@/selfcomp/HeaderLink';
export const Header = () => {
  return (
    <div className='px-32 py-20 flex justify-between items-stretch'>
      <div className='h-min flex justify-center items-stretch gap-5'>
        <img
          className='object-cover rounded-md w-20 h-20 shadow-xl'
          width={60}
          height={60}
          src={'newp2.png'}
        />
        <div className='flex-1 flex flex-col justify-around'>
          <Name />
          <h1>life is perspective | All good</h1>
        </div>
      </div>
      <div className='text-md flex justify-between items-center gap-2'>
        <div className='flex'>
          <HeaderLink label='HOME' />
          <HeaderLink label='WORK' />
          <HeaderLink label='PROJECT' />
        </div>
        <div className='items-center'>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};
