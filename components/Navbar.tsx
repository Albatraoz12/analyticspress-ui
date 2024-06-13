import Image from 'next/image';
import Link from 'next/link';
import logo from '../img/analyticsLogo.png';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Navbar = () => {
  return (
    <div className='bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between'>
      <Link href='/'>
        <Image src={logo} alt='AnalyticsPress' width={40} />
      </Link>
      <Avatar>
        <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
        <AvatarFallback className='text-black'>BT</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Navbar;
