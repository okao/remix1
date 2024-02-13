import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from '@remix-run/react';

import { useState, useRef } from 'react';

import logo from 'public/img/logo/svg/logo-no-background.svg';

const SideBar = () => {
  const [popCard, setPopCard] = useState('hidden');
  const [fade, setFade] = useState(false);
  const catRef = useRef(null);

  const handleMenuClick = () => {
    setPopCard('inline-block');
    setFade(true);

    console.log(fade);
  };

  const handleXClick = () => {
    setPopCard('hidden');
    setFade(false);
  };

  const handleCategoryClicked = (e: any) => {
    e.stopPropagation();

    console.log('catgory', catRef.current);
  };

  const categories = [
    { id: 1, name: 'cat_news', description: 'News' },
    { id: 2, name: 'cat_report', description: 'News' },
    { id: 3, name: 'cat_politics', description: 'News' },
    { id: 4, name: 'cat_religion', description: 'News' },
  ];

  console.log(fade, 'fade');
  return (
    <div className="hover:cursor-pointer">
      {/* sample advertisement */}

      <header className="border-b py-4 px-4 lg:px-0 bg-gray-50 mv_waheed min-h-[70px] text-3xl">
        <div className="flex flex-wrap items-center relative justify-between">
          <a className="max-w-lg px-2" href="/">
            <img src={logo} alt="logo" className="w-[190px]" />
          </a>
          <div
            id="collapseMenu"
            className="lg:flex max-lg:hidden text-gray-700 flex-1"
          >
            <ul className="lg:flex lg:gap-x-8 text-[18px] mv-waheed w-full justify-end px-2 flex-row">
              <li className="p-2 px-6 border-l border-gray-200">
                <a>ޚަބަރު</a>
              </li>
              <li className="p-2 px-6 border-l border-gray-200">
                <a>ރިޕޯޓް</a>
              </li>
              <li className="p-2 px-6 border-l border-gray-200">
                <a>ސިޔާސީ</a>
              </li>
              <li className="p-2 px-6">
                <a>ދީން</a>
              </li>
            </ul>
          </div>
          <div
            className="flex items-center mr-auto"
            onClick={handleMenuClick}
          >
            <button id="toggle" className="lg:hidden mr-7">
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div
        className={`lg:hidden ${
          fade
            ? 'opacity-100 fixed top-0 right-0 z-999 w-[100%] h-screen backdrop-blur mv-waheed transition-all duration-200 text-3xl'
            : 'opacity-0'
        } ${popCard}`}
        onClick={handleXClick}
      >
        <div className="backdrop-blur bg-[#2b2b2b]/80 h-full dark:bg-white text-slate-300">
          <div className="flex justify-start p-4">
            <button id="close" className="text-3xl">
              &times;
            </button>
          </div>
          <ul className="text-center h-full flex flex-col py-32 justify-start md:justify-start">
            <li
              ref={catRef}
              id="cat_news"
              className="p-4 hover:bg-[#2b2b2b]/90"
              onClick={(e) => {
                handleCategoryClicked(e);
              }}
            >
              <a href="#">ޚަބަރު</a>
            </li>
            <li
              ref={catRef}
              id="cat_report"
              className="p-4 hover:bg-[#2b2b2b]/90"
              onClick={(e) => {
                handleCategoryClicked(e);
              }}
            >
              <a href="#">ރިޕޯޓް</a>
            </li>
            <li
              ref={catRef}
              id="cat_politics"
              className="p-4 hover:bg-[#2b2b2b]/90"
              onClick={(e) => {
                handleCategoryClicked(e);
              }}
            >
              <a href="#">ސިޔާސީ</a>
            </li>
            <li
              ref={catRef}
              id="cat_religion"
              className="p-4 hover:bg-[#2b2b2b]/90"
              onClick={(e) => {
                handleCategoryClicked(e);
              }}
            >
              <a href="#">ދީން</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
