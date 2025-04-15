'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';

interface MoviePaginationProps {
  currentPage: number;
  totalPages: number;
}

export function MoviesPagination({ currentPage, totalPages }: MoviePaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      const params = new URLSearchParams(searchParams.toString());
      params.set('page', newPage.toString());

      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }
  };

  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition));
      sessionStorage.removeItem('scrollPosition');
    }
  }, [currentPage]);

  const getPageRange = () => {
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, currentPage + 1);

    if (endPage - startPage < 2) {
      if (currentPage < totalPages / 2) {
        endPage = Math.min(totalPages, startPage + 2);
      } else {
        startPage = Math.max(1, endPage - 2);
      }
    }

    return { startPage, endPage };
  };

  const { startPage, endPage } = getPageRange();

  return (
    <div className="flex justify-center mt-8">
      <nav className="flex items-center gap-1">
        <button
          disabled={currentPage === 1}
          onClick={() => {
            sessionStorage.setItem('scrollPosition', window.scrollY.toString());
            handlePageChange(currentPage - 1);
          }}
          className={`w-12 h-12 flex items-center justify-center cursor-pointer rounded-xl border border-[#726BEA]`}        >
          <Image
            src="/left-arrow-purple.svg"
            width={7}
            height={15}
            alt="right arrow image"
          />
        </button>

        {totalPages > 2 && currentPage > 2 && (
          <span className="text-[#726BEA]">
            ...
          </span>
        )}

        {Array.from({ length: endPage - startPage + 1 }, (_, i) => {
          const page = startPage + i;
          return (
            <button
              key={page}
              onClick={() => {
                sessionStorage.setItem('scrollPosition', window.scrollY.toString());
                handlePageChange(page);
              }}
              className={`w-12 h-12 rounded-xl border ${currentPage === page ? 'bg-[#726BEA] text-white' : 'bg-white border-gray-200 text-[#726BEA]'}`}
            >
              {page}
            </button>
          );
        })}

        {totalPages > 3 && currentPage !== totalPages && (
          <span className="text-[#726BEA]">
            ...
          </span>
        )}

        <button
          disabled={currentPage === totalPages}
          onClick={() => {
            sessionStorage.setItem('scrollPosition', window.scrollY.toString());
            handlePageChange(currentPage + 1);
          }}
          className={"w-12 h-12 flex items-center justify-center cursor-pointer rounded-xl border border-[#726BEA]"}        >
          <Image
            src="/right-arrow-purple.svg"
            width={7}
            height={15}
            alt="right arrow image"
          />
        </button>
      </nav>
    </div>
  );
}