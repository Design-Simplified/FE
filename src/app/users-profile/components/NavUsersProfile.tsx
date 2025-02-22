import IconLink from "@/components/links/IconLink";
import Typography from "@/components/Typography";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function NavUsersProfile({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  return (
    <nav className="w-full sticky top-0 bg-white flex flex-row gap-32 items-center justify-center py-4 xl:py-12 lg:py-10 md:py-8 sm:py-6 px-3 xl:px-11 lg:px-9 md:px-7 sm:px-5 z-[1000]">
      <IconLink
        icon={MdKeyboardArrowLeft}
        variant="white"
        href={href}
        className="absolute  left-3 xl:left-11 lg:left-9 md:left-7 sm:left-5 "
        iconClassName="lg:size-5 sm:size-4 size-3"
      />
      <Typography
        variant="h1"
        font="Lora"
        weight="semibold"
        className="text-sm xl:text-3xl lg:text-2xl md:text-lg sm:text-base"
      >
        {title}
      </Typography>
    </nav>
  );
}
