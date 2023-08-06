import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const Rm_neue = localFont({ src: [
  {
    path: './fonts/RMNeueTRIAL-Regular.otf',
    weight: '400',
    style: 'regular'
  },
  {
    path: './fonts/RMNeueTRIAL-Bold.otf',
    weight: '700',
    style: 'bold'
  },
  {
    path: './fonts/RMNeueTRIAL-Light.otf',
    weight: '300',
    style: 'light'
  },
] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={Rm_neue.className}>{children}</body>
    </html>
  );
}
