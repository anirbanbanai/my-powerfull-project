import Homepage from "../components/Home";
// import Navbar from "../components/Navbar";


const Home = ({children} : any) => {
    return (
        <div className="pt-20">
            {/* <Navbar></Navbar> */}
            {children}
            <Homepage></Homepage>
        </div>
    );
};

export default Home;