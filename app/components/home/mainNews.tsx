import MainNewsImage from 'public/img/News/MainNews.jpeg';

const MainNews = () => {
  return (
    <div className="bg-whiteish border flex lg:h-96 flex-col lg:flex-row-reverse ">
      <div className="border-b">
        <img
          src={MainNewsImage}
          alt="main news"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-2 lg:p-6 lg:w-2/3 lg:mt-0 border">
        <h1 className="leading-loose mv_waheed xl:text-[32px] lg:text-[24px] text-[18px]">
          ޑޮލަރު ލިމިޓް ކުޑައެއް ނުކުރޭ، މައްސަލަ ހައްލުކުރުމުގެ
          މަސައްކަތް ދަނީ ކުރިއަށް: ފިނޭންސް
        </h1>
        <span className="mb-8 text-[#a2a2a2] text-[12px]" dir="ltr">
          &#128337; 30 mins ago
        </span>
        <p className="truncate line-clamp-3 mb-2 mt-4 mb-8 text-lg leading-loose sm:px-0 article-reader text-balance text-pretty">
          ބީއެމްއެލް އަށް ޑޮލަރު ލިބުން ދަތިވެ ރުފިޔާ އެކައުންޓުތަކުގެ
          ކާޑު ލިމިޓް 90 ޕަސެންޓާ ހަމަޔަށް ކުޑަކުރަން ޖެހިދާނެ ކަމަށް
          އެ ބޭންކުގެ އޮފިޝަލުންނާ ހަވާލާދީ މީޑިއާގައި ބުނެފައި ވިޔަސް
          އެފަދަ އެއްވެސް ނިންމުމެއް ނިންމާފައި ނުވާ ކަމަށާއި ޑޮލަރުގެ
          މައްސަލަ ހައްލުކުރަން މަސައްކަތްކުރަމުން އަންނަ ކަމަށް
          ފިނޭންސް މިނިސްޓްރީން މިއަދު ބުނެފި އެވެ.{' '}
        </p>
      </div>
    </div>
  );
};

export default MainNews;
