
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel"
const Hero = (props) => {
  return (
    <div className='flex flex-row px-10 gap-5 mt-5'>
      <Carousel className=" w-full md:w-2/3"  opts={{
    loop: true,

  }}>
      <CarouselContent>
        {props.slider.map((item, index) => (
          <CarouselItem key={index}>
              <div className="md:h-[400px] relative ">
                  <img src={item.img1} className="object-cover h-auto " alt="item.img1" />
                  <h3 className=" absolute bottom-0 text-2xl text-white ">{ item.title}</h3>
              </div>
        
          </CarouselItem>
        ))}
      </CarouselContent>
      </Carousel>
      <div className="w-1/3 max-md:hidden">
        {props.featured.map((item, index) => (
          <div className="h-[400px] relative" key={index}>
                  <img src={item.img1} className="object-cover h-full" alt="item.img1" />
                  <h3 className=" absolute bottom-0 text-2xl text-white ">{ item.title}</h3>
              </div>
        ))}
      </div>
      
    </div>
  )
}

export default Hero