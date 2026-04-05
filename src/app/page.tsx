import Header from "../components/Header";
import GameSection from "../components/GameSection";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center w-full">
        <GameSection />
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7289422453597401"
     crossorigin="anonymous"></script>
