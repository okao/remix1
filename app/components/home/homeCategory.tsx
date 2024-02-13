const HomeCategory = () => {
  return (
    <div className="flex flex-col">
      <div>
        <div className="relative z-10 text-center mv_waheed">
          <button className="section-sub-titles section-sub-titles-main w-full cursor-pointer text-[40px] px-1 active">
            މުހިންމު ކެޓެގަރީތަށް
          </button>
        </div>
      </div>
      <div className="mx-auto mb-60px mv-faseyha relative flex flex-col justify-between text-waheed text-purple-brown mb-30px sm:mx-8 xl:mx-0 lg:flex-row">
        <div className="mx-5 overflow-hidden">
          <div className="flex flex-wrap col2-list-dashed -m-4">
            <div className="flex flex-row-reverse w-full border-dashed border-pale-grey list-lifestyle border-t  border-l  p-4  sm:w-1/2 xl:w-1/3 ">
              <div className="flex-shrink-0 w-[116px] h-[116px] sm:w-[170px]">
                <a
                  href="https://mihaaru.com/lifestyle/130367"
                  title="ޅެންވެރިންގެ ދުވަސް ފާހަގަކުރަން ގދ. ތިނަދޫގައި ބޭއްވި ޖަލްސާގައި ޅެންވެރިޔާ އަބްދުﷲ އަފީފް އަށް އޭނާގެ ކުދިންނާއި ކާފަ ކުދިން ފަތްކޮޅެއް އަރުވަނީ.-- ފޮޓޯ: ދިވެހިބަހުގެ އެކަޑަމީ"
                >
                  <div className="relative w-full h-full overflow-hidden bg-[#958078]">
                    <svg
                      className="absolute top-0 left-0"
                      width="100%"
                      height="110%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        fill="#958078"
                        width="100%"
                        height="100%"
                      ></rect>
                      <svg
                        x="50%"
                        y="50%"
                        width="40px"
                        height="34px"
                        overflow="visible"
                      >
                        <image
                          x="-20px"
                          y="-17px"
                          width="40px"
                          height="34px"
                        ></image>
                      </svg>
                    </svg>

                    <img
                      src="https://cdn.mihaaru.com/photos/2024/01/28/384945_3_0c97794322ae1b331cb853f508bc245c6eaa5c56_thumb.jpg"
                      alt="ޅެންވެރިންގެ ދުވަސް ފާހަގަކުރަން ގދ. ތިނަދޫގައި ބޭއްވި ޖަލްސާގައި ޅެންވެރިޔާ އަބްދުﷲ އަފީފް އަށް އޭނާގެ ކުދިންނާއި ކާފަ ކުދިން ފަތްކޮޅެއް އަރުވަނީ.-- ފޮޓޯ: ދިވެހިބަހުގެ އެކަޑަމީ"
                      className="absolute top-0 left-0 w-full h-full object-cover lazyloaded"
                    />
                  </div>
                </a>
              </div>

              <div className="flex-1 flex flex-col text-right justify-between pt-2 pr-4">
                <a
                  href="https://mihaaru.com/lifestyle/130367"
                  title="އަފީފުގެ ލޮލުން ކަރުނަ: މިއީ ދަރިންގެ ސަޕްރައިޒެއް!"
                  className="w-full h-full flex flex-col justify-between"
                >
                  <p className="leading-10 text-waheed text-xl lg:text-17px text-black-two hover:underline">
                    އަފީފުގެ ލޮލުން ކަރުނަ: މިއީ ދަރިންގެ
                    ސަޕްރައިޒެއް!
                  </p>
                  <div className="text-13px text-warm-grey-two flex justify-end space-x-2">
                    <div className="flex items-center">
                      <img
                        className=""
                        src="https://cdn.mihaaru.com/assets/mhr/icons/icon-listing-comment-2.svg?v=2"
                        width="16"
                        alt="comment icons"
                      />
                      <span className="ml-1">7</span>
                    </div>

                    <div className="flex items-center">
                      <img
                        src="https://cdn.mihaaru.com/assets/mhr/icons/icon-listing-time.svg?v=2"
                        width="16"
                        alt="time icon"
                      />
                      <span className="ml-1 w-full">2 weeks</span>
                    </div>
                  </div>{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
