// jshint esversion:6
import Navbar from "../../../components/navbar/navbar";
import firstbox from "./../../../assets/firstbox.svg";
import secondbox from "./../../../assets/secondbox.svg";
import thirdbox from "./../../../assets/thirdbox.svg";

function HomePage() {
    return (
        <>
        <Navbar/>
            <section  className="p-2 my-3 md:grid md:grid-cols-2 md:px-20 md:items-center lg:gap-40">
                <div>
                    <h1 className="text-5xl font-semibold text-pry" >Getting a new
                    skill for a career</h1>
                   <p className="text-2xl font-medium mt-7 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimi .</p>
                     <div className="flex items-center gap-5">
                <button className="bg-pry text-white p-4 rounded-lg text-2xl font-semibold md:font-bold">Get Started</button>
                <button className="p-4 rounded-lg text-2xl text-pry border border-pry font-semibold md:font-bold">Login</button>
                 </div>
                </div>
                <section className="hidden md:flex">
                    <div>
                    <img src={firstbox} alt='Coursenetic'/>
                    <img src={thirdbox} alt='Coursenetic'/>
                    </div>
                    <div>
                    <img src={secondbox} alt='Coursenetic'/>
                    </div>
                </section>
            </section>               
        </>
    );
}


export { HomePage }