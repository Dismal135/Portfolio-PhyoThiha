import Image from "next/image";
import quoteMachine from "@/app/images/quotemachine.png"
import documentation from "@/app/images/technicaldoc.png"
import product from "@/app/images/productlandingpage-sandy.vercel.app_ (1).png"
import tictactoe from "@/app/images/reacttictactoe.png"
import job from '@/app/images/joblandingweb.png'

const Projects = () => {
    return (
        <section id="projects" className="mt-10 flex flex-wrap gap-10 items-center justify-items-center justify-center">
            <figure className="inline-block w-fit">
            <a target="_blank" href="https://quote-machine-drab-xi.vercel.app">
                <Image className="glass" src={quoteMachine} alt="random quote machine" width={500} height={500} />
                <figcaption className="text-center hover:underline font-bold" >Random Quote Machine</figcaption></a>
                </figure>
                <figure className="inline-block w-fit">
                <a target="_blank" href="https://joblandingwebsite.vercel.app/">
                <Image className="glass" src={job} alt="job landing website" width={500} height={500} />
                <figcaption className="text-center hover:underline font-bold" >Websites Showcase</figcaption></a>
                </figure>
                <figure className="inline-block w-fit">
                <a target="_blank" href="https://technical-documentation-eta.vercel.app">
                <Image className="glass" src={documentation} alt="react technical documentation" width={500} height={500} />
                <figcaption className="text-center hover:underline font-bold" >React Techinical Documentation</figcaption></a>
                </figure>
                <figure className="inline-block w-fit">
                <a target="_blank" href="https://react-tic-tac-toe-ten-green.vercel.app">
                <Image className="glass" src={tictactoe} alt="tic tac toe game" width={500} height={500} />
                <figcaption className="text-center hover:underline font-bold" >React TicTacToe</figcaption></a>
                </figure>
                <figure className="inline-block w-fit">
                <a target="_blank" href="https://productlandingpage-sandy.vercel.app">
                <Image className="glass" src={product} alt="product landing page" width={500} height={500} />
                <figcaption className="text-center hover:underline font-bold" >Responsive Website</figcaption></a>
                </figure>
                <div className="lg:block hidden w-[500px]"></div>
        </section>
    )
};

export default Projects;