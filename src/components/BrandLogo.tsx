import { HiOutlineGlobe } from "react-icons/hi";

export function BrandLogo() {
  return (
    <span className="flex items-center gap-2 font-semibold flex-shrink-0 text-lg">
      <HiOutlineGlobe className="size-8" />
      <span>EquiDeals</span>
    </span>
  );
}
