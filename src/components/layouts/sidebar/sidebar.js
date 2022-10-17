import Link from 'next/link';
import { MdClose } from 'react-icons/md';
import { NAV_MENU } from '../../../constant/layout';
import useSidebar from '../../../hooks/use-sidebar';
import { Logo } from '../../commons';

export default function Sidebar() {
  const { toggleSidebar, closeSidebar } = useSidebar();
  return (
    <aside>
      <div className="h-full overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-4">
          <button onClick={closeSidebar} type="button">
            <Logo isMobile />
          </button>
          <MdClose
            onClick={toggleSidebar}
            className="text-primary text-2xl cursor-pointer"
          />
        </div>
        <div className="flex flex-col border-primary-primary border-opacity-10 border-y py-3">
          {NAV_MENU.map((menu) => (
            <Link href={menu.href} key={menu.label}>
              <button
                className="text-base text-left py-3 text-primary hover:text-primary"
                onClick={closeSidebar}
                type="button"
              >
                {menu.label}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
