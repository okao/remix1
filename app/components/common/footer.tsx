const Footer = () => {
  return (
    <div className="footer roboto w-full" dir="ltr">
      <div className="bg-blackish">
        <div className="flex flex-col items-center px-8 py-12 mx-auto">
          <a href="/?ref=mhr-lf">
            <img
              className="mb-12 w-76px"
              src="https://cdn.mihaaru.com/assets/mhr/images/logo-footer.png"
              alt="mihaaru logo"
            />
          </a>

          <ul className="flex flex-col flex-wrap justify-center mb-12 text-lg text-center text-pinkish-grey sm:flex-row">
            <a href="https://connect.mihaaru.com?ref=mhr-fn">
              <li className="mx-4 mb-4">Breaking MV Connect</li>
            </a>
            <a href="https://connect.mihaaru.com/classNameifieds?ref=mhr-fn">
              <li className="mx-4 mb-4">Classifieds</li>
            </a>
            <a href="https://edition.mv?ref=mhr-fn">
              <li className="mx-4 mb-4">The Edition</li>
            </a>
            <a href="https://dho.mv?ref=mhr-fn">
              <li className="mx-4 mb-4">Dho!?</li>
            </a>
            <a href="/flight-schedule?ref=mhr-fn" target="_self">
              <li className="mx-4 mb-4">Flight Schedule</li>
            </a>
            <a href="/contact?ref=mhr-fn" target="_self">
              <li className="mx-4 mb-4">Contact Us</li>
            </a>
          </ul>

          <ul className="flex mb-12">
            <li className="w-8 h-8 mx-1 bg-whiteish rounded-full">
              <a
                className="w-full h-full flex items-center justify-center"
                href="https://twitter.com/mihaarunews"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className=""
                  src="https://cdn.mihaaru.com/assets/mhr/icons/icon-socials-twitter3-dark.svg"
                  alt="twitter"
                />
              </a>
            </li>
            <li className="w-8 h-8 mx-1 bg-whiteish rounded-full">
              <a
                className="w-full h-full flex items-center justify-center"
                href="https://facebook.com/mihaaru"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className=""
                  src="https://cdn.mihaaru.com/assets/mhr/icons/icon-socials-facebook-dark.svg"
                  alt="facebook"
                />
              </a>
            </li>
            <li className="w-8 h-8 mx-1 bg-whiteish rounded-full">
              <a
                className="w-full h-full flex items-center justify-center"
                href="https://instagram.com/mihaarunews"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className=""
                  src="https://cdn.mihaaru.com/assets/mhr/icons/icon-socials-instagram2-dark.svg"
                  alt="instagram"
                />
              </a>
            </li>
            <li className="w-8 h-8 mx-1 bg-whiteish rounded-full">
              <a
                className="w-full h-full flex items-center justify-center"
                href="https://www.youtube.com/mihaaruvideos"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className=""
                  src="https://cdn.mihaaru.com/assets/mhr/icons/icon-socials-youtube2-dark.svg"
                  alt="youtube"
                />
              </a>
            </li>{' '}
          </ul>

          <p className="text-center text-warm-grey-two text-[14px]">
            Copyright © 2024 Breaking MV ·{' '}
            <a
              href="https://mihaaru.com/info/terms-and-conditions?ref=mhr-fn"
              title="Terms &amp; Conditions"
            >
              Terms and Conditions
            </a>{' '}
            ·{' '}
            <a
              href="https://mihaaru.com/info/privacy-policy?ref=mhr-fn"
              title="Privacy Policy"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
