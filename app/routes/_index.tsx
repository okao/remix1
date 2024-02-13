import type { MetaFunction } from '@remix-run/node';
import MainNews from '~/components/home/mainNews';
import MainSideAd from 'public/img/Ads/MainSide.jpeg';
import LatestNews from '~/components/home/latestNews';
import MiddleAd from '~/components/common/middleAd';
import HomeCategory from '~/components/home/homeCategory';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between lg:my-4 gap-x-4 lg:h-96 mb-0 lg:mb-8">
        <div className="flex-1">
          <MainNews />
        </div>
        <div className="hidden lg:block">
          <img
            src={MainSideAd}
            alt="Main side ad"
            className="h-full object-cover"
          />
          <caption className="text-center text-xs text-gray-500">
            Advertisment
          </caption>
        </div>
      </div>
      <LatestNews />
      <MiddleAd />
      <HomeCategory />
    </div>
  );
}
