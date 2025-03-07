import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


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
        <section>
            <SectionTitle
                heading={"From Our Menu"}
                subheading={"Popular Items"}
            ></SectionTitle>
            <div>
                {
                    menu.map(item => {

                    })
                }
            </div>
        </section>
    );
};

export default PopularManu;