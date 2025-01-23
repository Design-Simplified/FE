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
              className="text-xl text-white"
            >
              {menu.title}
            </Typography>
            <div
              className={clsxm(
                "isi w-full flex flex-col gap-3",
                menu.title === "Payment" && "gap-8",
              )}
            >
              {menu.items.map((item: FooterMenuItem) => (
                <Typography
                  font="Lora"
                  weight="regular"
                  className="text-lg text-white"
                  key={typeof item === "string" ? item : item.name}
                >
                  {typeof item === "string" ? (
                    item
                  ) : (
                    <>
                      {menu.title === "Follow Us" ? (
                        <div className="flex flex-row gap-2 items-center">
                          <NextImage
                            src={typeof item !== "string" ? item.icon : ""}
                            alt={item.name}
                            width={20}
                            height={20}
                            className="inline-block mr-2"
                          />
                          <Typography
                            font="Lora"
                            weight="regular"
                            className="text-lg text-white"
                          >
                            {item.name}
                          </Typography>
                        </div>
                      ) : (
                        <NextImage
                          src={item.icon}
                          alt={item.name}
                          width={100}
                          height={100}
                          imgClassName="object-cover"
                        />
                      )}
                    </>
                  )}
                </Typography>
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
                className="text-xl text-white xl:text-3xl lg:text-2xl md:text-xl"
              >
                {menu.title}
              </Typography>
              <div className={clsxm("isi w-full flex flex-col gap-5")}>
                {menu.items.map((item: FooterMenuItem) => (
                  <Typography
                    font="Lora"
                    weight="regular"
                    className="text-xl text-white xl:text-3xl lg:text-2xl md:text-xl"
                    key={typeof item === "string" ? item : item.name}
                  >
                    {typeof item === "string" ? (
                      item
                    ) : (
                      <>
                        {menu.title === "Follow Us" ? (
                          <div className="flex flex-row gap-2 items-center">
                            <NextImage
                              src={item.icon}
                              alt={item.name}
                              width={20}
                              height={20}
                              className="inline-block mr-2"
                            />
                            <Typography
                              font="Lora"
                              weight="regular"
                              className="text-lg text-white xl:text-3xl lg:text-2xl md:text-xl"
                            >
                              {item.name}
                            </Typography>
                          </div>
                        ) : (
                          <NextImage
                            src={item.icon}
                            alt={item.name}
                            width={100}
                            height={100}
                            imgClassName="object-cover"
                          />
                        )}
                      </>
                    )}
                  </Typography>
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
                className="text-xl text-white xl:text-3xl lg:text-2xl md:text-xl"
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
                        <div className="flex flex-row gap-2 items-center">
                          <NextImage
                            src={item.icon}
                            alt={item.name}
                            width={20}
                            height={20}
                            className="inline-block mr-2 lg:w-9 sm:w-7"
                            imgClassName="w-full object-cover"
                          />
                          <Typography
                            font="Lora"
                            weight="regular"
                            className="text-xl text-white xl:text-3xl lg:text-2xl md:text-xl"
                          >
                            {item.name}
                          </Typography>
                        </div>
                      ) : typeof item !== "string" ? (
                        <NextImage
                          src={item.icon}
                          alt={item.name}
                          width={120}
                          height={120}
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
    <footer className="w-full relative flex flex-col gap-16 px-8 py-10 bg-[#525B44] xl:px-24 lg:px-20 md:px-16 sm:px-8 xl:py-20 lg:py-16 md:py-12">
      <div className="w-full flex flex-col gap-10 sm:gap-32">
        <FooterDesktopMenu />
        <FooterMobileMenu />
      </div>
      <div className="w-full flex flex-col gap-9 justify-center items-center ">
        <div className="divider w-full h-0 border border-white"></div>
        <div className="w-full flex flex-col gap-5 justify-center items-center sm:flex-row sm:gap-4 sm:justify-between">
          <div className="logoNtitle flex flex-row gap-3 justify-center items-center w-fit md:gap-5">
            <NextImage
              src="/navbar/Logo.svg"
              alt="logo"
              width={50}
              height={42}
              className="xl:w-32 lg:w-28 md:w-24 sm:w-20"
              imgClassName="w-full"
            />
            <Typography
              font="Lora"
              weight="bold"
              className="text-white text-base relative top-1 xl:text-3xl lg:text-2xl md:text-lg sm:text-base sm:top-2"
            >
              DESIGN SIMPLIFIED
            </Typography>
          </div>
          <Typography
            font="Lora"
            weight="regular"
            className="text-white text-xs text-center xl:text-3xl lg:text-2xl md:text-lg sm:text-sm"
          >
            2024 Design Simplified. All Rights Reserved
          </Typography>
        </div>
      </div>
    </footer>
  );
}
