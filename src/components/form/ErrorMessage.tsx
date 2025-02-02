import Typography from "@/components/Typography";

export default function ErrorMessage({ children }: { children: string }) {
  return (
    <div className="flex space-x-1">
      <Typography
        as="p"
        weight="regular"
        variant="p"
        className="text-[10px] !leading-tight text-red-500 xl:text-base lg:text-base md:text-sm"
      >
        {children}
      </Typography>
    </div>
  );
}
