import React from "react";
import Navbar from "../../components/Navbar";
import withMainContext from "../../context/Main.context";
import { FiSearch } from "react-icons/fi";
import { BiWallet } from "react-icons/bi";
import { FaWarehouse } from "react-icons/fa";
import { AiOutlineLock } from "react-icons/ai";
import Slider from "react-slick";
import ImageBanner from "../../assets/international_trade.jpg";
import ServiceImage from "../../assets/photo3.jpg";
import LogoImage from "../../assets/logo.png";
import ImageList1 from "../../assets/IMG_20210510_161914.jpg";
import ImageList2 from "../../assets/IMG_20200728_102716.jpg";
import ImageList3 from "../../assets/IMG_20210220_104537.jpg";
import ImageList4 from "../../assets/IMG_20210319_163850.jpg";

const Button = (props) => {
  console.log(props.className);
  return (
    <a
      {...props}
      className={`font-medium text-white bg-black py-3 px-6 rounded-xl ${!!props.className && props.className
        }`}
    >
      {props.children}
    </a>
  );
};

const Hero = () => (
  <section className="md:h-screen">
    <div className="pt-24 bg-black opacity-60 md:h-screen w-full absolute z-20"></div>
    <div
      className="pt-24 bg-no-repeat bg-cover h-screen absolute w-full z-10"
      style={{ backgroundImage: `url('${ImageBanner}')` }}
    ></div>
    <div className="pt-24 w-full absolute z-30">
      <div className="container m-auto z-50">
        <div className="w-full mt-20">
          <h1 className="text-6xl text-white font-bold">
            Reliable & Express Logistic
          </h1>
          <h1 className="text-6xl text-white font-bold mt-4">
            Solution to save your Time!
          </h1>
          <p className="text-white font-medium mt-8">
            Competitive adventages to some of the largest companies all over the
            indonesia
          </p>
          <div className=" mt-10">
            <Button href="/about">About Us</Button>
          </div>
        </div>
      </div>
    </div>
    hello
  </section>
);

const ItemService = ({
  children,
  isBorderLeft = false,
  isBorderRight = false,
  Component,
  header,
}) => {
  return (
    <div
      className={` 
			${!!isBorderLeft && "border-l-2"} 
			${!!isBorderRight && "border-r-2"} 
			border-t-0 border-b-0 py-8 px-5 border-opacity-70`}
    >
      {!!Component && <Component className="w-12 h-12 text-red-500" />}
      {!!header && (
        <h1 className="text-lg mt-4 font-medium text-gray-800">{header}</h1>
      )}
      <p className="text-sm mt-2 text-gray-500">{children}</p>
    </div>
  );
};

const HomeService = () => {
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ut sit
	orci in facilisi in dictum bibendum. Scelerisque turpis ornare nunc
	diam donec eget lectusr`;
  const dataService = [
    {
      header: "Transparant Pricing",
      text,
      icon: BiWallet,
      isBorderLeft: false,
      isBorderRight: false,
    },
    {
      header: "Real-time Tracking",
      text,
      icon: FiSearch,
      isBorderLeft: true,
      isBorderRight: false,
    },
    {
      header: "Warehouse Storage",
      text,
      icon: FaWarehouse,
      isBorderLeft: true,
      isBorderRight: true,
    },
    {
      header: "Security For Cargo",
      text,
      icon: AiOutlineLock,
      isBorderLeft: false,
      isBorderRight: false,
    },
  ];
  return (
    <section className="container m-auto bg-white relative -mt-24 z-40 h-auto rounded-2xl shadow-xl grid grid-cols-4  grid-flow-col w-full">
      {dataService.map((item, index) => (
        <ItemService
          Component={item.icon}
          header={item.header}
          key={index}
          isBorderLeft={item.isBorderLeft}
          isBorderRight={item.isBorderRight}
        >
          {item.text}
        </ItemService>
      ))}
    </section>
  );
};

const AccentSmall = (props) => {
  return (
    <span {...props} className="text-red-500 font-medium">
      {props.children}
    </span>
  );
};

const Title = (props) => {
  return (
    <h4 {...props} className="mt-1 text-3xl font-semibold">
      {props.children}
    </h4>
  );
};

const Paragraph = (props) => {
  return (
    <p {...props} className="text-gray-500 mt-12">
      {props.children}
    </p>
  );
};

const SortAbout = () => {
  return (
    <section className="container m-auto bg-white relative my-20 z-40 h-auto rounded-2xl grid grid-cols-2 gap-12">
      <div className="bg-pink-500 w-full h-full overflow-hidden rounded-xl">
        <img src={ServiceImage} className="h-full w-full object-cover" alt="" />
      </div>
      <div class="py-16 pl-6">
        <AccentSmall>Affordable Price, Certified Forwader</AccentSmall>
        <Title>
          Safe, Reliable & Express Logistic
        </Title>
        <Title>
          Solution That Save Your Time!
        </Title>
        <div>
          <Paragraph>
            Manfaat dari perusahaan yang didirikan pada tanggal 04 Juni 2021
            adalah untuk memberikan pelayanan terbaik yang menjunjung tinggi
            nilai nilai kejujuran, solutifitas dan efektifitas yang berbasis
            kompetensi dan kualifikasi dalam tiap2 bidang dari pelayanan yang
            kami sediakan.
          </Paragraph>
        </div>
        <div className="mt-24">
          <Button href="/service">Lihat semua service</Button>
        </div>
      </div>
    </section>
  );
};

const Logo = () => {
  return <img className="w-full h-full" src={LogoImage} alt="logo" />;
};

const ServiceItem = (props) => {
  return (
    <div className="flex flex-col">
      <div className="h-80 w-full rounded-xl overflow-hidden">
        <img src={props.imgSrc} alt="" className="w-full h-full object-cover" />
      </div>
      <h5 className="text-base font-medium text-gray-900 mt-2">{props.text}</h5>
    </div>
  );
};

const ServiceSection = () => {
  const listService = [
    {
      imgSrc: ImageList1,
      text: "Ligula accumsan, ullamcorper",
      href: "",
    },
    {
      imgSrc: ImageList2,
      text: "Sem justo, sodales",
      href: "",
    },
    {
      imgSrc: ImageList3,
      text: "Nam vitae, ornare",
      href: "",
    },
    {
      imgSrc: ImageList4,
      text: "Eleifend sed turpis",
      href: "",
    },
  ];

  return (
    <section className="container m-auto my-16">
      <div className="text-center">
        <AccentSmall>
          Best Global and Indonesia Solutions, Real Fast!
        </AccentSmall>
        <Title>Global and Indonesia Cargo Solutions</Title>
        <div className="w-32 h-32 mx-auto mt-6">
          <Logo />
        </div>
        <div className="w-3/4 text-center m-auto">
          <Paragraph>
            Manfaat dari perusahaan yang didirikan pada tanggal 04 Juni 2021
            adalah untuk memberikan pelayanan terbaik yang menjunjung tinggi
            nilai nilai kejujuran, solutifitas dan efektifitas yang berbasis
            kompetensi dan kualifikasi dalam tiap2 bidang dari pelayanan yang
            kami sediakan.
          </Paragraph>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-8">
        {listService.map((e, i) => (
          <ServiceItem key={i} imgSrc={e.imgSrc} text={e.text} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button href="/galery">Lihat semua foto</Button>
      </div>
    </section>
  );
};



function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      // {...props}
      className={`${!!className ? className : ""} bg-pink-500 w-10 h-10 overflow-hidden rounded-full shadow-lg`}
      style={{ ...style, color: "white", zIndex: "10", background: "white", height: "40px", width: "40px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem" }}
      onClick={onClick}
    />
  );
}


const ReviewSection = () => {

  const setting = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />
  }


  const ReviewComponent = (props) => {
    return (
      <div className="w-full h-40 py-4 px-5 ">
        <div className="py-5  h-full w-full flex shadow-xl rounded-xl" >
          <div className="ml-5 h-16 w-16 overflow-hidden rounded-full bg-gray-100">
            <img src={props.imgSrc} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="ml-5  h-full  w-3/4 overflow-hidden flex flex-col">
            <h4 className="text-base font-medium">{props.name}</h4>
            <p className="text-sm text-gray-500 italic">{props.text}</p>
          </div>
        </div>
      </div>
    )
  }

  const text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae ipsam itaque assumenda in id quidem molestiae fugit autem ratione dignissimos!"
  const dataReview = [
    { text, name: "Barnando Akbarto", imgSrc: "https://source.unsplash.com/random/1" },
    { text, name: "Andhana Utama", imgSrc: "https://source.unsplash.com/random/2" },
    { text, name: "Ronaldo Wati", imgSrc: "https://source.unsplash.com/random/3" },
    { text, name: "David Backam", imgSrc: "https://source.unsplash.com/random/4" },
    { text, name: "Leonardo De Caprio", imgSrc: "https://source.unsplash.com/random/5" },
    { text, name: "John Cen", imgSrc: "https://source.unsplash.com/random/6" },
  ]

  return (
    <section className="container mx-auto py-10 text-center">
      <div className="text-center">
        <AccentSmall>
          Our Beloved Review’s
        </AccentSmall>
        <Title>Here’s what our Happy client </Title>
        <Title>are saying about us :</Title>
        <div className="my-10">
          <div className="w-4/5 mx-auto text-left">
            <Slider
              {...setting}
            >
              {dataReview.map((e, i) => {
                return (
                  <ReviewComponent
                    imgSrc={e.imgSrc}
                    name={e.name}
                    text={e.text}
                    key={i}
                  />
                )
              })}
            </Slider>
          </div>
        </div>
        <div className="w-3/4 text-center m-auto">
          <Paragraph>
            Kami selalu menjunjung tinggi akan integritas dan inovasi yang tiada henti terhadap bidang2 jasa yang kami sediakan yang berorientasi pada kepuasan pelanggan yang dihasilkan dari pendekatan pada setiap prosesnya.
          </Paragraph>
        </div>
      </div>
    </section>);
};


const SubscribeSection = (props) => {
  return (
    <div className="h-96 bg-red-500">
      <div className="container mx-auto pt-20 text-center text-white">
        <Title>Don’t miss any updates!</Title>
        <div className="mx-auto mt-20 w-2/6 h-72 bg-white rounded-xl shadow-xl text-black py-10 px-5">
          <p>Subscribe email kita untuk lebih cepat dalam informasi terbaru dari kami</p>
          <div className="relative h-full">
            <div className="block w-full absolute bottom-10">
              <input type="text" placeholder="eg: johndoe@mail.com" className="border-2 text-black bg-white py-3 px-6 rounded-xl outline-none focus:border-black w-full" />
              <button className="outline-none w-full mt-5 bg-black text-white py-3 px-6 rounded-xl font-medium" >Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeService />
      <SortAbout />
      <ServiceSection />
      <ReviewSection />
      <SubscribeSection />
      <div className="h-screen"></div>
    </>
  );
};

export default withMainContext(HomeLayout);
