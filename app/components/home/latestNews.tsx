import Image1 from 'public/img/News/img1.jpeg';
import IconComment from 'public/img/icons/icon-listing-comment-2.svg';
import IconTime from 'public/img/icons/icon-listing-time.svg';

const LatestNews = () => {
  return (
    <div className="mt-8 lg:mb-4 lg:mt-4 xl:mt-8 w-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1  sm:gap-4 md:justify-between bg-white">
      <div className="flex border">
        <div className="w-full border-b border-dashed border-pale-grey p-4 sm:border-none sm:p-0 flex flex-row-reverse sm:flex-col bg-whiteish">
          <div className="h-[116px] sm:w-full sm:h-[187px]  lg:h-[174px] bg-cover bg-center flex-shrink-0">
            <a
              href="https://mihaaru.com/news/130994"
              title="ފާމަސީތަކެއް ކައިރިން މީހަކު ހިނގާލާފައި ދަނީ.-- ފޮޓޯ: ފަޔާޒު މޫސާ/ މިހާރު"
            >
              <div className="relative w-full h-full overflow-hidden bg-[#615e61]">
                <svg
                  className="absolute top-0 left-0"
                  width="100%"
                  height="110%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    fill="#615e61"
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
                      href="https://cdn.mihaaru.com/assets/mhr/images/logo-header.png"
                    ></image>
                  </svg>
                </svg>
                <img
                  src={Image1}
                  alt="ފާމަސީތަކެއް ކައިރިން މީހަކު ހިނގާލާފައި ދަނީ.-- ފޮޓޯ: ފަޔާޒު މޫސާ/ މިހާރު"
                  className="relative lg:absolute top-0 left-0 w-full h-full object-cover ls-is-cached lazyloaded"
                />
              </div>
            </a>
          </div>

          <div className="pl-4 sm:h-[154px] lg:h-[163px] sm:p-4 flex flex-col justify-between flex-grow">
            <a
              href="https://mihaaru.com/news/130994"
              className="flex flex-col justify-between flex-grow h-full"
            >
              <p className="mv_waheed text-xl leading-10 sm:text-[22px] hover:underline">
                މޮޅެތި ބޭސް ފަސޭހައިން ގެނެވޭ ޕޮލިސީ ލޯންޗުކޮށްފި
              </p>
              <div
                className="text-[13px] text-warm-grey-two flex justify-end space-x-2"
                dir="ltr"
              >
                <div className="flex items-center">
                  <img
                    className=""
                    src={IconComment}
                    width="16"
                    alt="comment icons"
                  />
                  <span className="ml-1">11</span>
                </div>

                <div className="flex items-center">
                  <img src={IconTime} width="16" alt="time icon" />
                  <span className="ml-1 w-full">4 hr</span>
                </div>
              </div>{' '}
            </a>
          </div>
        </div>
      </div>
      <div className="flex border">
        <div className="w-full border-b border-dashed border-pale-grey p-4 sm:border-none sm:p-0 flex flex-row-reverse sm:flex-col bg-whiteish">
          <div className="h-[116px] sm:w-full sm:h-[187px]  lg:h-[174px] bg-cover bg-center flex-shrink-0">
            <a
              href="https://mihaaru.com/news/130994"
              title="ފާމަސީތަކެއް ކައިރިން މީހަކު ހިނގާލާފައި ދަނީ.-- ފޮޓޯ: ފަޔާޒު މޫސާ/ މިހާރު"
            >
              <div className="relative w-full h-full overflow-hidden bg-[#615e61]">
                <svg
                  className="absolute top-0 left-0"
                  width="100%"
                  height="110%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    fill="#615e61"
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
                      href="https://cdn.mihaaru.com/assets/mhr/images/logo-header.png"
                    ></image>
                  </svg>
                </svg>
                <img
                  src={Image1}
                  alt="ފާމަސީތަކެއް ކައިރިން މީހަކު ހިނގާލާފައި ދަނީ.-- ފޮޓޯ: ފަޔާޒު މޫސާ/ މިހާރު"
                  className="relative lg:absolute top-0 left-0 w-full h-full object-cover ls-is-cached lazyloaded"
                />
              </div>
            </a>
          </div>

          <div className="pl-4 sm:h-[154px] lg:h-[163px] sm:p-4 flex flex-col justify-between flex-grow">
            <a
              href="https://mihaaru.com/news/130994"
              className="flex flex-col justify-between flex-grow h-full"
            >
              <p className="mv_waheed text-xl leading-10 sm:text-[22px] hover:underline">
                މޮޅެތި ބޭސް ފަސޭހައިން ގެނެވޭ ޕޮލިސީ ލޯންޗުކޮށްފި
              </p>
              <div
                className="text-[13px] text-warm-grey-two flex justify-end space-x-2"
                dir="ltr"
              >
                <div className="flex items-center">
                  <img
                    className=""
                    src={IconComment}
                    width="16"
                    alt="comment icons"
                  />
                  <span className="ml-1">11</span>
                </div>

                <div className="flex items-center">
                  <img src={IconTime} width="16" alt="time icon" />
                  <span className="ml-1 w-full">4 hr</span>
                </div>
              </div>{' '}
            </a>
          </div>
        </div>
      </div>
      <div className="flex border">
        <div className="w-full border-b border-dashed border-pale-grey p-4 sm:border-none sm:p-0 flex flex-row-reverse sm:flex-col bg-whiteish">
          <div className="h-[116px] sm:w-full sm:h-[187px]  lg:h-[174px] bg-cover bg-center flex-shrink-0">
            <a
              href="https://mihaaru.com/news/130994"
              title="ފާމަސީތަކެއް ކައިރިން މީހަކު ހިނގާލާފައި ދަނީ.-- ފޮޓޯ: ފަޔާޒު މޫސާ/ މިހާރު"
            >
              <div className="relative w-full h-full overflow-hidden bg-[#615e61]">
                <svg
                  className="absolute top-0 left-0"
                  width="100%"
                  height="110%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    fill="#615e61"
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
                      href="https://cdn.mihaaru.com/assets/mhr/images/logo-header.png"
                    ></image>
                  </svg>
                </svg>
                <img
                  src={Image1}
                  alt="ފާމަސީތަކެއް ކައިރިން މީހަކު ހިނގާލާފައި ދަނީ.-- ފޮޓޯ: ފަޔާޒު މޫސާ/ މިހާރު"
                  className="relative lg:absolute top-0 left-0 w-full h-full object-cover ls-is-cached lazyloaded"
                />
              </div>
            </a>
          </div>

          <div className="pl-4 sm:h-[154px] lg:h-[163px] sm:p-4 flex flex-col justify-between flex-grow">
            <a
              href="https://mihaaru.com/news/130994"
              className="flex flex-col justify-between flex-grow h-full"
            >
              <p className="mv_waheed text-xl leading-10 sm:text-[22px] hover:underline">
                މޮޅެތި ބޭސް ފަސޭހައިން ގެނެވޭ ޕޮލިސީ ލޯންޗުކޮށްފި
              </p>
              <div
                className="text-[13px] text-warm-grey-two flex justify-end space-x-2"
                dir="ltr"
              >
                <div className="flex items-center">
                  <img
                    className=""
                    src={IconComment}
                    width="16"
                    alt="comment icons"
                  />
                  <span className="ml-1">11</span>
                </div>

                <div className="flex items-center">
                  <img src={IconTime} width="16" alt="time icon" />
                  <span className="ml-1 w-full">4 hr</span>
                </div>
              </div>{' '}
            </a>
          </div>
        </div>
      </div>
      <div className="flex border">
        <div className="w-full border-b border-dashed border-pale-grey p-4 sm:border-none sm:p-0 flex flex-row-reverse sm:flex-col bg-whiteish">
          <div className="h-[116px] sm:w-full sm:h-[187px]  lg:h-[174px] bg-cover bg-center flex-shrink-0">
            <a
              href="https://mihaaru.com/news/130994"
              title="ފާމަސީތަކެއް ކައިރިން މީހަކު ހިނގާލާފައި ދަނީ.-- ފޮޓޯ: ފަޔާޒު މޫސާ/ މިހާރު"
            >
              <div className="relative w-full h-full overflow-hidden bg-[#615e61]">
                <svg
                  className="absolute top-0 left-0"
                  width="100%"
                  height="110%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    fill="#615e61"
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
                      href="https://cdn.mihaaru.com/assets/mhr/images/logo-header.png"
                    ></image>
                  </svg>
                </svg>
                <img
                  src={Image1}
                  alt="ފާމަސީތަކެއް ކައިރިން މީހަކު ހިނގާލާފައި ދަނީ.-- ފޮޓޯ: ފަޔާޒު މޫސާ/ މިހާރު"
                  className="relative lg:absolute top-0 left-0 w-full h-full object-cover ls-is-cached lazyloaded"
                />
              </div>
            </a>
          </div>

          <div className="pl-4 sm:h-[154px] lg:h-[163px] sm:p-4 flex flex-col justify-between flex-grow">
            <a
              href="https://mihaaru.com/news/130994"
              className="flex flex-col justify-between flex-grow h-full"
            >
              <p className="mv_waheed text-xl leading-10 sm:text-[22px] hover:underline">
                މޮޅެތި ބޭސް ފަސޭހައިން ގެނެވޭ ޕޮލިސީ ލޯންޗުކޮށްފި
              </p>
              <div
                className="text-[13px] text-warm-grey-two flex justify-end space-x-2"
                dir="ltr"
              >
                <div className="flex items-center">
                  <img
                    className=""
                    src={IconComment}
                    width="16"
                    alt="comment icons"
                  />
                  <span className="ml-1">11</span>
                </div>

                <div className="flex items-center">
                  <img src={IconTime} width="16" alt="time icon" />
                  <span className="ml-1 w-full">4 hr</span>
                </div>
              </div>{' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
