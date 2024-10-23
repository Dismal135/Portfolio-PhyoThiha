import Achivement from "./components/achivements/achivement";
import Myself from "./components/myself/myself";
import Penguin from "./components/penguin/penguin";
import Projects from "./components/projects/projects";
import ScrollToTop from "./components/scrollToTop/scrollToTop";
import ThemeSwitcherButton from "./components/themeSwitcherButton/themeSwitcherButton";

export default function Home() {
  return (
    <>
      <div className="container space-y-10" >
        <nav>
          <h1><strong>Portfolio</strong></h1>
          <ul id="nav-link">
            <ThemeSwitcherButton />
            <li><a href="#skills"><strong>Skills</strong></a></li>
            <li><a href="#projects"><strong>Projects</strong></a></li>
            <li><a href="#footer"><strong>Contact</strong></a></li>
          </ul>
        </nav>
        <main>
          <h1 className="text-base"><strong>Hi! My name is PHYO THI HA. I am a Front-End Webdeveloper.</strong></h1>
          <Penguin />
          <Myself />
          <Achivement />
          <Projects />
        </main>
        <footer id="footer">
          <h1 className="text-xl font-bold">Contact📜📜📜</h1>
          <p><strong>Address:</strong> 🏠 Yangon, Thaketa, HtuParYone front 5th street, No.1268.</p>
          <p><strong>Tel:</strong> 📞 09758454815</p>
          <p><strong>Email:</strong> 📧 phyothiha97531@gmail.com</p>
        </footer>
      </div>
      <ScrollToTop />
    </>
  );
}
