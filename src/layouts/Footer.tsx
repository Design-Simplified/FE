import UnstyledLink from "@/components/links/UnstyledLink";
import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";
import clsxm from "@/lib/clsxm";

interface FooterMenuProps {
  title: string;
  items: Array<string | { name: string; icon: string }>;
}

type FooterMenuItem = string | { name: string; icon: string };

const FooterMenu = [
  {
    title: "Discover",
    items: ["About Us", "Free Contents", "Career", "Community", "Contact Us"],
  },
  {
    title: "Terms & Policies",
    items: [
      "Terms of Service",
      "Privacy Policy",
      "Cookie Policy",
      "Copyright Policy",
    ],
  },
  {
    title: "Help",
    items: ["Help Forum", "Help Center"],
  },
  {
    title: "Follow Us",
    items: [
      {
        name: "Instagram",
        icon: "/Footer/instagram.svg",
      },
      {
        name: "Linkedin",
        icon: "/Footer/linkedin.svg",
      },
    ],
  },
  {
    title: "Payment",
    items: [
      {
        name: "MasterCard",
        icon: "/Footer/mastercard.svg",
      },
      {
        name: "JCB",
        icon: "/Footer/jcb.svg",
      },
      {
        name: "AMEX",
        icon: "/Footer/amex.png",
      },
      {
        name: "Visa",
        icon: "/Footer/visa.svg",
      },
      {
        name: "Paypal",
        icon: "/Footer/paypal.svg",
      },
    ],
  },
];

const FooterMobileMenu = () => {
  return (
    <>
      <div className="each flex w-full gap-8 flex-col sm:hidden">
        {FooterMenu.map((menu: FooterMenuProps, index) => (
          <div key={index} className="each flex w-full gap-8 flex-col">
            <Typography
              font="Lora"
              weight="bold"
              className="text-xs text-white"
            >
              {menu.title}
            </Typography>
            <div
              className={clsxm(
                "isi w-full flex flex-col gap-5",
                menu.title === "Payment" && "gap-8",
              )}
            >
              {menu.items.map((item: FooterMenuItem) => (
                <UnstyledLink
                  href="/"
                  key={typeof item === "string" ? item : item.name}
                >
                  <Typography
                    font="Lora"
                    weight="regular"
                    className="text-xs text-white hover:font-bold"
                    key={typeof item === "string" ? item : item.name}
                  >
                    {typeof item === "string" ? (
                      item
                    ) : (
                      <>
                        {menu.title === "Follow Us" ? (
                          <div className="flex flex-row gap-1 items-center">
                            <NextImage
                              src={typeof item !== "string" ? item.icon : ""}
                              alt={item.name}
                              width={14}
                              height={14}
                              className="inline-block"
                            />
                            <Typography
                              font="Lora"
                              weight="regular"
                              className="text-xs text-white hover:font-bold"
                            >
                              {item.name}
                            </Typography>
                          </div>
                        ) : (
                          <NextImage
                            src={item.icon}
                            alt={item.name}
                            width={51}
                            height={51}
                            imgClassName="object-cover"
                          />
                        )}
                      </>
                    )}
                  </Typography>
                </UnstyledLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const FooterDesktopMenu = () => {
  return (
    <>
      <div className="desktop flex-col w-full gap-28 hidden sm:flex">
        <div className="atas flex w-full flex-row gap-12 justify-between">
          {FooterMenu.slice(0, 3).map((menu: FooterMenuProps, index) => (
            <div key={index} className="each flex w-full gap-9 flex-col">
              <Typography
                font="Lora"
                weight="bold"
                className="text-base text-white md:text-base"
              >
                {menu.title}
              </Typography>
              <div className={clsxm("isi w-full flex flex-col gap-5")}>
                {menu.items.map((item: FooterMenuItem) => (
                  <UnstyledLink
                    href="/"
                    key={typeof item === "string" ? item : item.name}
                  >
                    <Typography
                      font="Lora"
                      weight="regular"
                      className="text-base text-white md:text-base hover:font-bold"
                      key={typeof item === "string" ? item : item.name}
                    >
                      {typeof item === "string" ? item : null}
                    </Typography>
                  </UnstyledLink>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="bawah w-full flex flex-row gap-4 justify-between items-start">
          {FooterMenu.slice(3).map((menu: FooterMenuProps, index) => (
            <div
              key={index}
              className={clsxm(
                "each flex gap-8 flex-col",
                menu.title === "Payment" && "w-[65%]",
              )}
            >
              <Typography
                font="Lora"
                weight="bold"
                className="text-base text-white md:text-base"
              >
                {menu.title}
              </Typography>
              <div
                className={clsxm(
                  "isi w-full flex",
                  menu.title === "Payment" && "flex-wrap gap-9",
                  menu.title === "Follow Us" && "flex-col gap-6",
                )}
              >
                {menu.items
                  .filter((item: FooterMenuItem) => typeof item !== "string")
                  .map((item: FooterMenuItem) => (
                    <div
                      key={typeof item === "string" ? item : item.name}
                      className="text-lg text-white w-fit"
                    >
                      {menu.title === "Follow Us" &&
                      typeof item !== "string" ? (
                        <UnstyledLink
                          href="/"
                          key={typeof item === "string" ? item : item.name}
                          className="hover:font-bold"
                        >
                          <div className="flex flex-row gap-2 items-center">
                            <NextImage
                              src={item.icon}
                              alt={item.name}
                              width={14}
                              height={14}
                              className="inline-block hover:w-[110%]"
                              imgClassName="w-full object-cover"
                            />
                            <Typography
                              font="Lora"
                              weight="regular"
                              className="text-base text-white md:text-base hover:font-bold"
                            >
                              {item.name}
                            </Typography>
                          </div>
                        </UnstyledLink>
                      ) : typeof item !== "string" ? (
                        <NextImage
                          src={item.icon}
                          alt={item.name}
                          width={60}
                          height={60}
                          imgClassName="object-cover"
                        />
                      ) : null}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default function Footer() {
  return (
    <footer className="w-full relative flex flex-col sm:gap-40 lg:gap-48 gap-16 px-8 py-10 bg-[#525B44] xl:px-28 lg:px-24 md:px-20 sm:px-16 xl:py-20 lg:py-16 md:py-12 xl:pt-28 lg:pt-24 md:pt-20 sm:pt-16">
      <div className="w-full flex flex-col gap-10 sm:gap-32">
        <FooterDesktopMenu />
        <FooterMobileMenu />
      </div>
      <div className="w-full flex flex-col gap-9 justify-center items-center ">
        <div className="divider w-full h-0 border border-white"></div>
        <div className="w-full flex flex-col gap-5 justify-center items-center sm:flex-row sm:gap-4 sm:justify-between">
          <div className="logoNtitle flex flex-row gap-1 justify-center items-center w-fit sm:gap-2">
            <NextImage
              src="/navbar/Logo.svg"
              alt="logo"
              width={41}
              height={37}
              className="sm:w-14"
              imgClassName="w-full"
            />
            <Typography
              font="Lora"
              weight="bold"
              className="text-white text-xs relative top-1 md:text-base sm:text-sm sm:top-1"
            >
              DESIGN SIMPLIFIED
            </Typography>
          </div>
          <Typography
            font="Lora"
            weight="regular"
            className="text-white text-[10px] text-center md:text-base sm:text-sm"
          >
            2024 Design Simplified. All Rights Reserved
          </Typography>
        </div>
      </div>
    </footer>
  );
}
