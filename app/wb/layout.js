import "../globals.css";
import Sidebar from "@/components/common/Sidebar";
import NavHeader from "@/components/common/NavHeader";

export default function RootLayout({ children }) {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-[#E5E5E5]">
          <NavHeader />
          <div className="px-3.5 py-3.5">
          {children}
          </div>
        </div>
      </div>
    </div>
  );
}
