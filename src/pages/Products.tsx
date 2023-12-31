import image_1 from "../assets/image_7.jpg";
import image_2 from "../assets/image_2.jpg";
import image_3 from "../assets/image_3.jpg";
import CardImage from "../components/CardImage";
import image_5 from "../assets/Image_5.png";
import Rectangle_Box from "../components/Rectangle_Box";

const Products = () => {
  return (
    <div
      id="products"
      className="bg-slate-100 pb-20 px-2 sm:min-h-[960px] sm:h-[120vh]"
    >
      <div className="flex flex-col mt-14 justify-between pt-14">
        <div className="flex flex-col mb-16 items-center self-center">
          <h1 className="font-bold text-5xl">Products</h1>
          <p className="text-slate-500 mt-4">
            A wide range of products including
          </p>
        </div>

        <div className="flex flex-col items-center pl-4 mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row space-y-10 sm:space-y-0 justify-between xl:space-x-24 ml-6">
            <CardImage
              src={image_3}
              title={`Digital Cameras`}
              body={`Capture memories instantly and bring them to life with our classic Polaroid cameras. Rediscover the joy of physical photos, share tangible mementos, and create lasting memories that you can hold in your hands.`}
            />
            <CardImage
              src={image_2}
              title={`Drones`}
              body={`Take to the skies and capture breathtaking moments with our high-performance drones. Unlock new perspectives, unleash your creativity, and explore the world from above with our cutting-edge aerial companions.`}
            />
            <CardImage
              src={image_1}
              title={`Smart Watches`}
              body={`Elevate your style and stay connected with our high-end smartwatch. Combining timeless elegance with cutting-edge features, this sophisticated timepiece seamlessly integrates into your daily routine.`}
            />
          </div>

          <div className="relative top-20 xl:top-28 hidden sm:block left-0">
            <Rectangle_Box />
          </div>

          <img
            src={image_5}
            alt="earpods"
            className="hidden lg:block relative bottom-[20rem] left-[21rem] xl:bottom-64 xl:left-[24rem] w-[40%] xl:w-[35%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
