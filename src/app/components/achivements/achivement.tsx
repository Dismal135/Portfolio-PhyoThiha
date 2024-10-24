import Image from "next/image";
import html from '@/app/images/html-5.png';
import css from '@/app/images/css.png';
import js from '@/app/images/js.png';
import react from '@/app/images/react.png';
import nodejs from '@/app/images/nodejs.png';
import nextjs from '@/app/images/nextjs.png';
import mml from '@/app/images/mml.jpg';
import design from '@/app/images/responsive web design.png';
import placeholder from '@/app/images/placeholderimage.png';

const Achivement = () => {
    return (
        <div className="space-y-16 mt-10">
            <section className="space-y-4" id="skills">
                <h1 className="text-xl flex items-center gap-4"><strong>Skills</strong><div className="w-full h-[1px] bg-gray-300"></div></h1>
                <div className="flex flex-wrap gap-16 justify-center">
                <Image src={html} alt="html" width={100} height={100} />
                <Image src={css} alt="css" width={100} height={100} />
                <Image src={js} alt="javascript" width={100} height={100} />
                <Image src={react} alt="react" width={100} height={100} />
                <Image src={nextjs} alt="nodejs" width={100} height={100} />
                <Image src={nodejs} alt="nextjs" width={100} height={100} />
                <Image className="hidden md:block lg:hidden" src={placeholder} alt="placeholder image" width={100} height={100} />
                <Image className="hidden md:block lg:hidden" src={placeholder} alt="placeholder image" width={100} height={100} />
                </div>
            </section>

            <section className="space-y-4">
                <h1 className="text-xl"><strong>Experience</strong>🏅🏅🏅🏅</h1>
                <figure className="flex items-center gap-4 text-sm">
                <Image src={mml} alt="myanmar media linkage" width={100} height={100} />
                <div>
                <figcaption>Myanmar Media Linkage</figcaption>
                <a className="hover:underline" href="https://mml.com.mm/">https://mml.com.mm/</a>
                </div>
                </figure>
            </section>

            <section className="space-y-4">
                <h1 className="text-xl text-center"><strong>Certificates</strong></h1>
                <figure className="inline-block w-fit">
                <Image src={design} alt="design certificate" width={500} height={500}/>
                <a target="_blank" href="https://www.freecodecamp.org/certification/PHYOTHIHA1056/responsive-web-design"><figcaption className="text-center hover:underline">Responsive Web Design</figcaption></a>
                </figure>
            </section>
        </div>
    )
};

export default Achivement;