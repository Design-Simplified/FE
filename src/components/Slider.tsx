"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import clsxm from "@/lib/clsxm";
import Typography from "./Typography";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  const [isDragging, setIsDragging] = React.useState(false);

  const [value, setValue] = React.useState(props.defaultValue || [50]);
  const thumbRef = React.useRef<HTMLSpanElement>(null);
  const [thumbPosition, setThumbPosition] = React.useState(0);

  const updateThumbPosition = () => {
    if (thumbRef.current) {
      const parent = thumbRef.current.closest("div"); // Ambil parent terdekat (wrapper slider)
      if (parent) {
        const parentRect = parent.getBoundingClientRect();
        const thumbRect = thumbRef.current.getBoundingClientRect();
        setThumbPosition(
          thumbRect.left - parentRect.left + thumbRect.width / 2,
        );
      }
    }
  };

  React.useEffect(() => {
    requestAnimationFrame(updateThumbPosition);
  }, [value]);

  return (
    <div className="relative w-full">
      <Typography
        variant="p"
        font="Lora"
        weight="semibold"
        className="absolute -top-10 left-0 transform -translate-x-1/2 text-sm font-medium"
        style={{ left: `${thumbPosition}px` }}
      >
        {"$" + value[0]}
      </Typography>

      <SliderPrimitive.Root
        ref={ref}
        className={clsxm(
          "relative flex w-full touch-none select-none items-center",
          className,
        )}
        value={value}
        onValueChange={(newValue) => {
          if (isDragging) {
            // Hanya ubah value saat dragging
            setValue(newValue);
            updateThumbPosition();
          }
        }}
        onPointerDown={() => setIsDragging(true)} // Mulai dragging
        onPointerUp={() => setIsDragging(false)} // Selesai dragging
        onPointerMove={(e) => {
          if (isDragging) {
            // Pastikan hanya update saat thumb di-drag
            updateThumbPosition();
          }
        }}
        onValueCommit={(newValue) => setValue(newValue)}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-3 w-full grow overflow-hidden rounded-full bg-[#D9D9D9]">
          <SliderPrimitive.Range className="absolute h-full bg-[#525B44]" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          ref={thumbRef}
          className="block h-5 w-5 rounded-full bg-[#525B44] shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        />
      </SliderPrimitive.Root>
    </div>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
