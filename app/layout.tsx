import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/navbar/footer";
import { Toaster } from "sonner";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Kuldeep Portfolio website",
  description: "A personal portfolio website that showcases my work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className} bg-neutral-100 antialiased [--pattern-fg:var(--color-neutral-950)]/5 selection:bg-blue-500 selection:text-white dark:bg-neutral-950 dark:[--pattern-fg:var(--color-white)]/10`}
        >
          <script
            dangerouslySetInnerHTML={{
              __html: `
            (function(){
              try{
                var stored = localStorage.getItem('theme');
                var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                var isDark = stored ? stored === 'dark' : prefersDark;
                if(isDark){ document.documentElement.classList.add('dark'); }
                else { document.documentElement.classList.remove('dark'); }
              }catch(e){}
            })();
          `,
            }}
          />
          <Toaster position="top-center" />
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
