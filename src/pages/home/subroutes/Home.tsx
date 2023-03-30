// jshint esversion:6
import Navbar from "../../../components/navbar/navbar";


function HomePage() {
    return (
        <>
        <Navbar/>
            <section  className="p-2 my-3 md:flex">
                <div>
                    <h1 className="text-5xl font-semibold text-pry mb-3" >Getting a new
                    skill for a career</h1>
                   <p className="text-2xl font-medium mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimi .</p>
                     <div className="flex items-center gap-5">
                <button className="bg-pry text-white p-4 rounded-lg text-2xl font-semibold md:font-bold">Get Started</button>
                <button className="p-4 rounded-lg text-2xl text-pry border border-pry font-semibold md:font-bold">Login</button>
                 </div>
                </div>
                <div>
                    <img/>
                </div>
            </section>               
        </>
    );
}


export { HomePage }