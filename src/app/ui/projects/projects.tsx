import Image from "next/image";
import quoteMachine from "@/app/images/quotemachine.png"
import documentation from "@/app/images/technicaldoc.png"
import product from "@/app/images/productlandingpage.png"
import tictactoe from "@/app/images/reacttictactoe.png"

const Projects = () => {
    return (
        <section id="projects" className="space-y-10 mt-16">
            <h1 className="text-xl text-center"><strong>My projects</strong></h1>
            <figure>
                <Image src={quoteMachine} alt="random quote machine" width={500} height={500} />
                <a target="_blank" href="https://randomquotemachinephyothiha.netlify.app"><figcaption className="text-center hover:underline" >Random Quote Machine</figcaption></a>
                </figure>
                <figure>
                <Image src={documentation} alt="react technical documentation" width={500} height={500} />
                <a target="_blank" href="https://reacttechnicaldocumentation.netlify.app/"><figcaption className="text-center hover:underline" >React Techinical Documentation</figcaption></a>
                </figure>
                <figure>
                <Image src={product} alt="product landing page" width={500} height={500} />
                <a target="_blank" href="https://productlandingpagephyothiha.netlify.app/"><figcaption className="text-center hover:underline" >Product Landing Page</figcaption></a>
                </figure>
                <figure>
                <Image src={tictactoe} alt="tic tac toe game" width={500} height={500} />
                <a target="_blank" href="https://reacttictactoepth.netlify.app/"><figcaption className="text-center hover:underline" >React TicTacToe</figcaption></a>
                </figure>
        </section>
    )
};

export default Projects;