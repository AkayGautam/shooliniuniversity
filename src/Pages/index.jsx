import dynamic from "next/dynamic";
import Header from "../components/Header";
import SliderDemo from "../components/SliderDemo";
import IconBox from "../components/IconBox";
const Ranking = dynamic(() => import("../components/Ranking"));
const Companies = dynamic(() => import("../components/Companies"));
const ShooliniAdvantage = dynamic(() =>
  import("../components/ShooliniAdvantage")
);
const Programmes = dynamic(() =>
  import("../LayoutPages/School-Programe/Programmes")
);

const Testimonials = dynamic(() => import("../components/Testimonials"));
const ResearchStories = dynamic(() => import("../components/ResearchStories"));
const Events = dynamic(() => import("../LayoutPages/events/Events"));
const GalleryView = dynamic(() => import("../components/GalleryView"));
const ShooliniImpact = dynamic(() => import("../components/ShooliniImpact"));
const ScrollButton = dynamic(() => import("../components/common/ScrollButton"));
const Footer = dynamic(() => import("../components/Footer"));

export const server = process.env.BASE_URL;

export default function homepage({ programs, testimonials }) {
  return (
    <>
      <Header />

      <SliderDemo />

      <IconBox />

      <Ranking />

      <ShooliniImpact />
      
      <Companies />

      <ShooliniAdvantage />

      <Programmes programs={programs} />

<Testimonials testimonials={testimonials} />

      <ResearchStories />

      <GalleryView />

    

      <ScrollButton />

      <Footer />
    </>
  );
}

// server side rendering
export async function getServerSideProps() {
  const res = await fetch(`https://shooliniuniversity.com/api/home`);
  const data = await res.json();

  return {
    props: {
      programs: data.programs || [],
      testimonials: data.testimonials,
    },
  };
}
