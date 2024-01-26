import { Carousel, HomePageCard, CarouselCategory, CarouselProduct } from ".";

function HomePage() {
  return (
        <div className="bg-amazonclone-background">
            <div className="min-w-[1000px] max-w-[1500px] m-auto">
                <Carousel/>
                <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
                    <HomePageCard
                        title={"Deals in PCs"}
                        img={"/home_grid_1.jpg"}
                        link={"See terms and conditions"}
                        />
                    <HomePageCard
                        title={"FREE Shipping to Philippines"}
                        img={"/home_grid_2.jpg"}
                        link={"See terms and conditions"}
                        />
                    <HomePageCard
                        title={"Beauty steals under $25"}
                        img={"/home_grid_3.jpg"}
                        link={"See terms and conditions"}
                        />
                    <HomePageCard
                        title={"Toys under $25"}
                        img={"/home_grid_4.jpg"}
                        link={"Browse Kindle Unlimited"}
                        />
                    <HomePageCard
                        title={"Shop Pet Supplies"}
                        img={"/home_grid_5.jpg"}
                        link={"See more"}
                        />
                    <HomePageCard
                        title={"Spring Sale"}
                        img={"/home_grid_6.jpg"}
                        link={"See the deals"}
                        />
                    <HomePageCard
                        title={"Echo Buds"}
                        img={"/home_grid_7.jpg"}
                        link={"See more"}
                        />
                    <HomePageCard
                        title={"Family Plan: 3 months free"}
                        img={"/home_grid_8.jpg"}
                        link={"Learn more"}
                        />
                    <div className="m-3 pt-8">
                        <img className="xl:hidden" src={"/banner_image_2.jpg"}/>
                    </div>
                </div>
                <CarouselProduct/>
                <CarouselCategory/>
                <div className="h-[200px]">
                    <img className="h-[100%] m-auto" src={"/banner_image.jpg"} alt="Banner 1" />
                </div>
            </div>
        </div>
  )
}

export default HomePage