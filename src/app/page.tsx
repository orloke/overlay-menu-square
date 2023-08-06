"use client";

import Link from "next/link";
import { Menu } from "./assets/Menu";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function Home() {
  useEffect(() => {
    if (window !== undefined) {
      const menu = document.querySelector(".content-overlay");
      gsap.set(menu, { opacity: 0 });
      const squareContainer = document.querySelector(
        "#square-container",
      ) as HTMLElement;

      const squareSize = 100;

      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const numCols = Math.ceil(screenWidth / squareSize);
      const numRows = Math.ceil(screenHeight / squareSize);
      const numSquares = numCols * numRows;

      squareContainer.style.width = `${numCols * squareSize}px`;
      squareContainer.style.height = `${numRows * squareSize}px`;

      let squares: HTMLDivElement[] = [];

      const createSquares = () => {
        for (let i = 0; i < numSquares; i++) {
          const square = document.createElement("div");
          square.classList.add("square");
          squareContainer.appendChild(square);
          squares.push(square);
        }
      };

      const animateSquares = () => {
        gsap.fromTo(
          squares,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            delay: 0.5,
            duration: 0.0005,
            stagger: {
              each: 0.004,
              from: "random",
            },
          },
        );

        gsap.to(squares, {
          opacity: 0,
          delay: 1.5,
          duration: 0.0005,
          stagger: {
            each: 0.004,
            from: "random",
          },
        });
      };
      let overlayVisible = false;

      document.querySelector("#toggle")?.addEventListener("click", () => {
        squareContainer.innerHTML = "";
        squares = [];
        createSquares();
        animateSquares();

        gsap.to(menu, 0.025, {
          opacity: overlayVisible ? 0 : 1,
          visibility: overlayVisible ? "hidden" : "visible",
          delay: 1.15,
        });

        gsap.to(menu, {
          zIndex: overlayVisible ? -1 : 0,
          delay: overlayVisible ? 0 : 2,
        });
        overlayVisible = !overlayVisible;
      });
    }
  }, []);

  return (
    <main className='w-screen h-screen overflow-hidden '>
      <div
        id='toggle'
        className='fixed top-0 left-1/2 -translate-x-1/2 flex justify-center items-center my-4 py-2 px-4 bg-[rgba(255,255,255,0.75)] border border-[rgba(255,255,255,0.5)] rounded-[40px] backdrop-blur-lg shadow-lg cursor-pointer z-30 '
      >
        <Menu />
      </div>

      <nav className='fixed top-0 w-full flex justify-between text-white mix-blend-difference z-10'>
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

      <div
        id='square-container'
        className='w-screen h-screen flex flex-wrap justify-start items-start overflow-hidden z-30 pointer-events-none '
      ></div>

      <div className='content-overlay fixed top-0 w-screen h-screen flex justify-center items-center gap-[5em] bg-[#242424] text-white -z-10 '>
        <div className='nav-header'>
          <h1 className='text-[#fd552f] text-[4vw]'>work with us</h1>
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
