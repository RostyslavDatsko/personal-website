export const metadata = {
  title: 'Rostyslav Datsko',
  description: 'Personal portfolio website',
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}