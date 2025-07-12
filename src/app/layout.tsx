import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Admin Panel",
  description: "Manage teachers and payments",
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="flex bg-white text-black dark:bg-gray-950 dark:text-white transition-colors duration-300">
        <Sidebar />
        <div className="flex-1 flex flex-col h-screen overflow-y-auto">
          <Topbar />
          <Toaster position="top-right" reverseOrder={false} />
          <main className="flex-1  bg-gray-50 dark:bg-gray-900">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
