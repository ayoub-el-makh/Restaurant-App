import Dish from "./Dish";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./Menu.css";
import { EffectCards } from "swiper/modules";
import { useEffect, useState } from "react";

const Menu = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => setData(data.categories))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div id="Menu" className="menu-section">
      <div>
        <h1>Our Menu</h1>
        <p className="p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          voluptates voluptas <br /> veritatis pariatur, similique architecto
          eaque provident aliquam .
        </p>
      </div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper swiper-menu"
      >
        {data.map(
          ({
            idCategory,
            strCategory,
            strCategoryThumb,
            strCategoryDescription,
          }) => {
            return (
              <SwiperSlide
                key={idCategory}
                className="swiper-slide-menu"
                style={{ height: "50%" }}
              >
                <Dish
                  title={strCategory}
                  image={strCategoryThumb}
                  description={strCategoryDescription}
                />
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </div>
  );
};
export default Menu;
