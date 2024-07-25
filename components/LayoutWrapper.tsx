import headerNavLinks from '@/data/headerNavLinks';
import { ReactNode } from 'react';
import Footer from './Footer';
import Link from './Link';
import MobileNav from './MobileNav';
import SectionContainer from './SectionContainer';
import ThemeSwitch from './ThemeSwitch';
import Header from './Header';

interface Props {
  children: ReactNode;
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className='flex h-screen flex-col justify-between'>
        <header className='flex items-center justify-end py-8'>
          <div className='flex items-center text-base leading-5'>
            <Header/>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className='mb-auto'>{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
