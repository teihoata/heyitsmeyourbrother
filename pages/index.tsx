import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { WelcomeGrid } from '../components/WelcomeGrid/WelcomeGrid';
import { FooterSocial } from '../components/Footer/FooterSocial';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <WelcomeGrid />
      <ColorSchemeToggle />
      <FooterSocial />
    </>
  );
}
