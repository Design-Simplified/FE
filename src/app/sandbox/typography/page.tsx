import Typography, {
  TypographyVariant,
  FontWeight,
} from "@/components/Typography";

const TypographySandbox = () => {
  const variants = Object.keys(TypographyVariant).filter((key) =>
    isNaN(Number(key)),
  ) as Array<keyof typeof TypographyVariant>;
  const weights = Object.keys(FontWeight).filter((key) =>
    isNaN(Number(key)),
  ) as Array<keyof typeof FontWeight>;

  return (
    <div className="space-y-8 p-8">
      <h1 className="text-2xl font-bold">Typography Sandbox</h1>
      {variants.map((variant) => (
        <div key={variant} className="space-y-4">
          <h2 className="text-xl font-semibold">Variant: {variant}</h2>
          {weights.map((weight) => (
            <div key={weight} className="space-y-2">
              <Typography
                variant={variant}
                weight={weight}
                className="text-white"
              >
                {variant} - {weight} (Normal)
              </Typography>
              <Typography
                variant={variant}
                weight={weight}
                className="text-white"
                italic
              >
                {variant} - {weight} (Italic)
              </Typography>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TypographySandbox;
