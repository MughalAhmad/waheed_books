"use client"
import Image from 'next/image'
import { useState, useRef, useEffect, act } from 'react'
import Link from "next/link";

const Sidebar = () => {
  const [isInventoryOpen, setIsInventoryOpen] = useState(false)
  const [isFinanceOpen, setIsFinanceOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
    const [dashboardIcon, setDashboardIcon] = useState('/svg/dark_dashboard.svg');
  const [inventoryIcon, setInventoryIcon] = useState('/svg/dark_inventory.svg');
  const [financeIcon, setFinanceIcon] = useState('/svg/dark_finance.svg');
  const [orderIcon, setOrderIcon] = useState('/svg/dark_order.svg');
  const [reportIcon, setReportIcon] = useState('/svg/dark_report.svg');
  const [logoutIcon, setLogoutIcon] = useState('/svg/red_logout.svg');
  const [active, setActive] = useState('');

  let inventorySubItems = [
    {
      name: 'Sale Invoice',    
      url: '/wb/salelist'
    },
    {
      name: 'Sale Return',    
      url: '/wb/salereturnlist'
    },
    {
      name: 'Purchase',    
      url: '/wb/purchaselist'
    },
    {
      name: 'Purchase Return',    
      url: '/wb/purchasereturnlist'
    },
    {
      name: 'Product',    
      url: '/wb/productlist'
    }
  ];

    let SingleItem = [
    {
      name: 'Orders',    
      url: '/wb/order'
    },
    {
      name: 'Reports',    
      url: '/wb/report'
    }
  ];
  

  // Refs for submenu height calculation
  const inventoryRef = useRef(null)
  const financeRef = useRef(null)

  // Close mobile menu on wider screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

 const handleStates = (menu) => {
    if(menu === 'inventory'){
        setIsInventoryOpen(!isInventoryOpen);
        setIsFinanceOpen(false);
        if(menu === active){
          setActive("");
        }
        else{
          setActive(menu);
        }
    }
    else if(menu === 'finance'){
        setIsFinanceOpen(!isFinanceOpen);
        setIsInventoryOpen(false);
        if(menu === active){
          setActive("");
        }
        else{
          setActive(menu);
        }
    }
    else{
        setIsInventoryOpen(false);
        setIsFinanceOpen(false);
        setActive(menu);
    }
  }

  return (
    <>
      {/* Mobile menu button with improved touch target */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className={`lg:hidden fixed top-4 left-0 z-50 p-3 hover:bg-white hover:text-[#66D991] rounded-lg transition-colors ${
          isMobileOpen && "hidden"
        }`}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-[#66D991]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`
        fixed lg:static top-0 left-0 h-screen
        w-[85vw] lg:w-64
        transform transition-transform duration-300 ease-out
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        z-50 overflow-hidden border-r border-[#1D1419]/20
      `}
      >
        {/* Scrollable content container */}
        <div className="h-full overflow-y-auto pb-20">
          {/* Header */}
          <div className="flex justify-between items-center p-4">
            <div className="flex justify-center items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-black" />
              <span className="text-base md:text-2xl font-semibold text-center">
                <span className="text-[#66D991]">Waheed</span> Books
              </span>
              <span className="w-3 h-3 rounded-full bg-black" />
            </div>

            <button
              onClick={() => setIsMobileOpen(false)}
              className="lg:hidden p-2 hover:bg-[#66D991] hover:text-white rounded-lg"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menu container */}
          <nav className="p-4 space-y-3">
            {/* Dashboard Menu */}
            <Link
                onMouseEnter={() =>setDashboardIcon("/svg/dashboard.svg")}
                onMouseLeave={() =>setDashboardIcon("/svg/dark_dashboard.svg")}
                onClick={() => handleStates('dashboard')}
                href='/wb/dashboard'
                className={`flex items-center justify-start pl-16 lg:pl-0 lg:justify-center w-full p-3 rounded-lg text-[#202224] hover:bg-[#66D991] font-bold hover:text-white relative ${
                  active === 'dashboard' ? "bg-[#66D991] text-white" : ""
                }`}
              >
                <img
                  src={active === 'dashboard' ? '/svg/dashboard.svg' : dashboardIcon}
                  alt="dashboard"
                  className="ml-2 w-5 h-5 absolute left-5"
                />
                Dashboard
              </Link>

            {/* Inventory Menu */}
            <div>
              <button
                onMouseEnter={() => setInventoryIcon("/svg/inventory.svg")}
                onMouseLeave={() => setInventoryIcon("/svg/dark_inventory.svg")}
                onClick={() => handleStates("inventory")}
                className={`flex items-center justify-start pl-16 lg:pl-0 lg:justify-center w-full p-3 rounded-lg hover:bg-[#66D991] text-[#202224] hover:text-white relative ${
                  active === "inventory" ? "bg-[#66D991] text-white" : ""
                }`}
              >
                <img
                  src={
                    active === "inventory"
                      ? "/svg/inventory.svg"
                      : inventoryIcon
                  }
                  alt="inventory"
                  className="ml-2 w-5 h-5 absolute left-5"
                />
                <span className="font-bold">Inventory</span>
              </button>

              <div
                ref={inventoryRef}
                className={`overflow-hidden transition-all duration-200 ease-in-out ${
                  isInventoryOpen ? "mt-0" : "h-0"
                }`}
              >
                <div className="pl-9 text-base font-normal">
                  {inventorySubItems.map((item) => (
                    <div key={item.name}>
                      {item.name === "Product" ? (
                        <Link
                          key={item.name}
                          href={item.url}
                          className="flex items-center text-gray-300 transition-colors relative"
                        >
                          <span className="border-l border-b rounded-bl-lg border-gray-300 absolute text-transparent h-3 top-0 left-0">
                            ...
                          </span>
                          <span className="ml-6 text-[#1D1419] opacity-50">
                            {item.name}
                          </span>
                        </Link>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.url}
                          className="flex items-center py-3 text-gray-300 transition-colors border-l border-opacity-25"
                        >
                          <hr className="w-3.5 h-0.5 mr-2 bg-opacity-25" />
                          <span className="text-[#1D1419] opacity-50">
                            {item.name}
                          </span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Finance Menu */}
            <div>
              <button
                onMouseEnter={() => setFinanceIcon("/svg/finance.svg")}
                onMouseLeave={() => setFinanceIcon("/svg/dark_finance.svg")}
                onClick={() => handleStates("finance")}
                className={`flex items-center justify-start pl-16 lg:pl-0 lg:justify-center w-full p-3 rounded-lg text-[#202224] hover:bg-[#66D991] hover:text-white relative ${
                  active === "finance" ? "bg-[#66D991] text-white" : ""
                }`}
              >
                <img
                  src={active === "finance" ? "/svg/finance.svg" : financeIcon}
                  alt="finance"
                  className="ml-2 w-5 h-5 absolute left-5"
                />
                <span className="font-bold">Finance</span>
              </button>

              <div
                ref={financeRef}
                className={`overflow-hidden transition-all duration-200 ease-in-out ${
                  isFinanceOpen ? "mt-0" : "h-0"
                }`}
              >
                <div className="pl-9 text-base font-normal">
                  <Link
                    href='/wb/headlist'
                    className="flex items-center text-gray-300 transition-colors relative"
                  >
                    <span className="border-l border-b rounded-bl-lg border-gray-300 absolute text-transparent h-5 top-0 left-0">
                      ...
                    </span>
                    <span className="ml-6 mt-2 text-[#1D1419] opacity-50">
                      Head
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Single items */}
            {SingleItem.map((item) => (
              <Link
                onMouseEnter={() =>
                  item.name === "Orders"
                    ? setOrderIcon("/svg/order.svg")
                    : setReportIcon("/svg/report.svg")
                }
                onMouseLeave={() =>
                  item.name === "Orders"
                    ? setOrderIcon("/svg/dark_order.svg")
                    : setReportIcon("/svg/dark_report.svg")
                }
                onClick={() => handleStates(item.name)}
                key={item.name}
                href={item.url}
                className={`flex items-center justify-start pl-16 lg:pl-0 lg:justify-center w-full p-3 rounded-lg text-[#202224] hover:bg-[#66D991] font-bold hover:text-white relative ${
                  active === item.name ? "bg-[#66D991] text-white" : ""
                }`}
              >
                <img
                  src={
                    item.name === "Orders"
                      ? active === "Orders"
                        ? "/svg/order.svg"
                        : orderIcon
                      : active === "Reports"
                      ? "/svg/report.svg"
                      : reportIcon
                  }
                  alt="orders/reports"
                  className="ml-2 w-5 h-5 absolute left-5"
                />
                {item.name}
              </Link>
            ))}
            {/* Logout item */}
            <a
              onMouseEnter={() => setLogoutIcon("/svg/logout.svg")}
              onMouseLeave={() => setLogoutIcon("/svg/red_logout.svg")}
              href="#"
              className={`flex items-center justify-start pl-16 lg:pl-0 lg:justify-center w-full p-3 rounded-lg text-red-500 hover:bg-[#66D991] font-bold hover:text-white relative`}
            >
              <img
                src={logoutIcon}
                alt="logout"
                className="ml-2 w-5 h-5 absolute left-5"
              />
              Logout
            </a>
          </nav>
        </div>
      </aside>

      {/* Mobile overlay with fade effect */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-white/70 backdrop-blur-sm z-40 animate-fade-in"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
}

export default Sidebar