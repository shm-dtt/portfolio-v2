import { Great_Vibes, Playfair_Display, Inter, Inter_Tight } from "next/font/google";
import localFont from "next/font/local";

// export const ppMondwest = localFont({
//   src: "../../public/fonts/PPMondwest-Regular.otf",
//   weight: "200",
// });
// export const greatVibes = Great_Vibes({
//   subsets: ["latin"],
//   weight: "400",
// });
export const playfairDisplay = Playfair_Display({ subsets: ["latin"], weight: "400" });
export const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });