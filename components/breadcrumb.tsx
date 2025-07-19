import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  name: string;
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ name, items }) => {
  return (
    <div className='bg-slate-50 mt-16 md:px-40  px-5 py-16'>
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <ChevronRight strokeWidth={1.5} size={18}/>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span className="text-gray-400 mx-2">/</span>}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-gray-900 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-secondary font-medium ">{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="text-center">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-900">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default Breadcrumb;
