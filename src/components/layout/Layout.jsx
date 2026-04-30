import { MainNav } from './MainNav';
import { Footer } from './Footer';

export function Layout({ children }) {
  return (
    <>
      <MainNav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
