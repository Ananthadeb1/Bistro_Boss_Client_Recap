import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item  bg-fixed pt-10 my-20">
            <SectionTitle
                subheading={"check it out"}
                heading={"Featured item"}></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 bt-12 px-36 bg-slate-500/40  ">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20,2030</p>
                    <p className="uppercase">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero assumenda itaque nobis, illum debitis ratione dolore nisi consequatur expedita sint possimus. Obcaecati officia cumque id quibusdam magni esse perferendis. Expedita!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;