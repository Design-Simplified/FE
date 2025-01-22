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

export default function Footer() {
  return (
    <footer className="w-full relative flex flex-col gap-16 px-8 py-10 bg-[#525B44]">
      <div className="w-full flex flex-col gap-10">
        <div className="each flex w-full gap-8 flex-col">
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
                              src={item.icon}
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
      </div>
      <div className="w-full flex flex-col gap-9 justify-center items-center">
        <div className="divider w-full h-0 border border-white"></div>
        <div className="w-full flex flex-col gap-5 justify-center items-center">
          <div className="logoNtitle flex flex-row gap-3 justify-center items-center w-fit">
            <NextImage
              src="/navbar/Logo.svg"
              alt="logo"
              width={50}
              height={42}
            />
            <Typography
              font="Lora"
              weight="bold"
              className="text-white text-base relative top-1"
            >
              DESIGN SIMPLIFIED
            </Typography>
          </div>
          <Typography
            font="Lora"
            weight="regular"
            className="text-white text-xs text-center"
          >
            2024 Design Simplified. All Rights Reserved
          </Typography>
        </div>
      </div>
    </footer>
  );
}
