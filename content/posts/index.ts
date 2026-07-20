import type { BlogPost } from "@/lib/blog";
import { geoRehberi } from "./geo-rehberi";
import { instagramReklamRehberi } from "./instagram-reklam-rehberi";
import { capcutFontYuklemeHatasi } from "./capcut-font-yukleme-hatasi";

/** Register every post here; lib/blog.ts sorts by date. */
export const posts: BlogPost[] = [
  geoRehberi,
  instagramReklamRehberi,
  capcutFontYuklemeHatasi,
];
