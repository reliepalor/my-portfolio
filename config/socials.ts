import { Icons } from "@/components/common/icons";
import { siteConfig } from "@/config/site";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: `@${siteConfig.username}`,
    icon: Icons.gitHub,
    link: siteConfig.links.github,
  },
  {
    name: "LinkedIn",
    username: siteConfig.authorName,
    icon: Icons.linkedin,
    link: siteConfig.links.linkedin,
  },
  {
    name: "Twitter",
    username: `@${siteConfig.username}`,
    icon: Icons.twitter,
    link: `https://twitter.com/${siteConfig.username}`,
  },
  {
    name: "Gmail",
    username: "naman.barkiya02",
    icon: Icons.gmail,
    link: `mailto:${siteConfig.authorName.toLowerCase().replace(/\s+/g, ".")}@gmail.com`,
  },
];
