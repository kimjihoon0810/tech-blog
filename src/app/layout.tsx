import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.scss";
import Image from "next/image";
import Link from "next/link";

const notoSansKr = Noto_Sans_KR({
  // preload: true, 기본값
  subsets: ["latin"], // 또는 preload: false
  weight: ["100", "400", "700", "900"], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
});

export const metadata: Metadata = {
  title: "Jihoon's tech-blog",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansKr.className}`}>
        <header>
          <div className="inner">
            <Link href={"/"}>
              <Image
                src={"/images/logo.png"}
                alt="기술블로그 홈"
                width={40}
                height={40}
              />
              <h1>Jhun's tech-blog</h1>
            </Link>
          </div>
        </header>
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
