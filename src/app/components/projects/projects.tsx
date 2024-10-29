import Image from "next/image";
import quoteMachine from "@/app/images/quotemachine.png"
import documentation from "@/app/images/technicaldoc.png"
import product from "@/app/images/productlandingpage.png"
import tictactoe from "@/app/images/reacttictactoe.png"
import job from '@/app/images/joblandingweb.png'

const Projects = () => {
    return (
        <section id="projects" className="mt-10 flex flex-wrap gap-10 items-center justify-items-center justify-center">
            <figure className="inline-block w-fit">
                <Image src={quoteMachine} alt="random quote machine" width={500} height={500} />
                <a target="_blank" href="https://randomquotemachinephyothiha.netlify.app"><figcaption className="text-center hover:underline" >Random Quote Machine</figcaption></a>
                </figure>
                <figure className="inline-block w-fit">
                <Image src={documentation} alt="react technical documentation" width={500} height={500} />
                <a target="_blank" href="https://reacttechnicaldocumentation.netlify.app/"><figcaption className="text-center hover:underline" >React Techinical Documentation</figcaption></a>
                </figure>
                <figure className="inline-block w-fit">
                <Image src={product} alt="product landing page" width={500} height={500} />
                <a target="_blank" href="https://productlandingpagephyothiha.netlify.app/"><figcaption className="text-center hover:underline" >Product Landing Page</figcaption></a>
                </figure>
                <figure className="inline-block w-fit">
                <Image src={tictactoe} alt="tic tac toe game" width={500} height={500} />
                <a target="_blank" href="https://reacttictactoepth.netlify.app/"><figcaption className="text-center hover:underline" >React TicTacToe</figcaption></a>
                </figure>
                <figure className="inline-block w-fit">
                <Image src={job} alt="job landing website" width={500} height={500} />
                <a target="_blank" href="https://joblandingwebsite.vercel.app/"><figcaption className="text-center hover:underline" >Websites Showcase</figcaption></a>
                </figure>
                <div className="lg:block hidden w-[500px]"></div>
        </section>
    )
};

export default Projects;