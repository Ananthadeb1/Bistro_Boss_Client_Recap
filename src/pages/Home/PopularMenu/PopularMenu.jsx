import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular') //popular category er item gula sudhu store hobe baki gula hobe na 
                setMenu(popularItems)
            })
    }, [])


    return (
        <section className="mb-12">
            <SectionTitle
                heading={"From Our Menu"}
                subheading={"Popular Items"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {//array er proti ta item ke dhore dhore ek ek kore kaj kore ei map 
                    menu.map(item =>
                        <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>
                    )
                }
            </div>
            <div className="flex justify-center">
                <button className="  btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </div>
        </section>
    );
};

export default PopularMenu;