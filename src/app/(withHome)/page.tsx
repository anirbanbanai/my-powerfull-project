import Homepage from "../components/Home";
// import Navbar from "../components/Navbar";


const Home = ({children} : any) => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            {children}
            <Homepage></Homepage>
        </div>
    );
};

export default Home;