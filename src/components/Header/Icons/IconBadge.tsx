import Link from "next/link";
import { type LucideIcon } from "lucide-react";

interface IconBadgeProps {
  url: string;
  icon: LucideIcon;
}
const IconBadge = ({ url, icon: Icon }: IconBadgeProps) => {
  return (
    <Link href={url}>
      <Icon />
    </Link>
  );
};

export default IconBadge;
