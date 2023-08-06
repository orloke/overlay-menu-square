import Link from "next/link";
import { Menu } from "./assets/Menu";

export default function Home() {
  return (
    <main className='w-screen h-screen overflow-hidden '>
      <div id='toggle'>
        <Menu />
      </div>

      <nav>
        <div>
          <p>+</p>
          <p>xrtl wrld</p>
        </div>
        <div>
          <p>xrtl wrld</p>
          <p>+</p>
        </div>
      </nav>

      <div className='hero fixed top-0 w-screen h-screen flex justify-center items-center bg-white -z-20 pointer-events-none font-bold '>
        <div className='header'>
          <h1>we help brands explore vibes</h1>
        </div>
      </div>

      <div className='square-container'></div>

      <div className='content-overlay'>
        <div className='nav-header'>
          <h1>work with us</h1>
        </div>

        <div className='nav-links'>
          <div className='nav-link'>
            <span>(01)</span>
            <Link href='#'>home</Link>
          </div>
          <div className='nav-link'>
            <span>(02)</span>
            <Link href='#'>our studio</Link>
          </div>
          <div className='nav-link'>
            <span>(03)</span>
            <Link href='#'>projects</Link>
          </div>
          <div className='nav-link'>
            <span>(04)</span>
            <Link href='#'>community</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
