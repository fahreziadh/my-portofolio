import CardBio from "@/components/cardBio";
import Link from "next/link";

export default function Home() {
  return <div className="flex flex-col gap-[36px]">
    <h1 className="font-bold text-[48px]">Fahrezi Adha</h1>
    <p>Saya Aji, seorang <span className="font-bold">Software Developer di Google Indonesia</span>, dan saya senang dapat berbagi karya dan pengalaman saya dengan Anda di sini.</p>
    <CardBio />
    <p className="">Sebagai seorang software engineer, saya telah mengembangkan berbagai aplikasi dan platform yang melibatkan teknologi canggih seperti Java, Python, dan React Native. Saya selalu mencari cara untuk meningkatkan keterampilan saya dan mengeksplorasi teknologi baru yang dapat membantu saya menciptakan solusi yang lebih baik.</p>
    <div className="inline-flex gap-8 ">
       <Link href="/" className="underline underline-offset-8">Github</Link>
       <Link href="/" className="underline underline-offset-8">Youtube</Link>
    </div>
  </div>
}
