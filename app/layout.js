import "./globals.css";

export const metadata = {
  title: "LAWJUSTICE - Premier Law Firm & Attorneys",
  description:
    "Transforming Equity With Precision And Gentle Advocacy. Dedicated legal counsel and courtroom representation across civil, corporate, criminal, and family law.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#08101E] text-slate-100 font-sans selection:bg-[#C59139] selection:text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
