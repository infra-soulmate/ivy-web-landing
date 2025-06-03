import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ivy Soulmate - #1 advance AI Girlfriend",
  description: "Hot Idols are waiting to get intimate with you. Anytime! Visualize Your Fantasies, Daily Hot Photos & Videos, Curated Scenarios, Roleplay Chat",
  keywords: "ai girlfriend, ai sexting, create ai girlfriend, create girlfriend, custom girlfriend, ai chat sex, ai girlfriend app, sex chatbot, sexting bot, ai sex chatbot, sexy ai chat, ai gf, free ai girlfriend, sexting ai bot, dirty talking ai, ai girlfriend free, ai girlfriend app free, ai girlfriend that sends pictures, dirty ai chat, adult ai girlfriend, naughty chat bot, free sexting bot, ai dirty chat, chatgpt sex, free ai gf, chatbot for sex, sex chat gpt, ai sexy chat, ai adult chat, dirty chat ai, erotic ai chat, free ai girlfriend online, sexy chatbot, ai girlfriend websites, my ai girlfriend, create an ai girlfriend, best free ai girlfriend, sexy chat ai, sexting ai free, ai chat sexy",
  openGraph: {
    title: "Ivy Soulmate - #1 advance AI Girlfriend",
    description: "Hot Idols are waiting to get intimate with you. Anytime! Visualize Your Fantasies, Daily Hot Photos & Videos, Curated Scenarios, Roleplay Chat",
    images: ["https://ivy-cdn.b-cdn.net/static/og.jpg"]
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} antialiased bg-gray-900 text-gray-300`}
      >
        {children}
      </body>
    </html>
  );
}
