import {Header,HeroImage,ContactSocial,Footer} from "../components";
import {Link} from "react-router-dom";
import { useParams} from "react-router";
import { useEffect, useState } from "react";
import {db} from "../firebase-config";
import Loading from "./Loading";
function PortFolio() {
   let { company } = useParams();
   const [project, setProject] = useState([]);
   const [mounted, setMounted] = useState(true);
   useEffect(() => {
      window.scrollTo(0, 0)
      db.collection("projects").where("id", "==", company).get()
      .then(response => {
        if(mounted) {
          setProject(response.docs[0].data());
          setMounted(false)
        }
      })
      .catch(error => {
        setMounted(false)
      });
    }, [])
    const technologies = project.technologies ?? [];
    if (mounted) return <Loading/>
  return (
    <>
    <Header/>
    <HeroImage background={project.id} titleBold={project.title_bold}  titleExtraLight={project.title_extra_light} />
    <div id="portfolio-details" className="bg-white mt-28 flex flex-col md:flex-row  h-heightPortfolioDetailsMobil md:h-heightPortfolioDetails ml-4 mr-4 md:ml-32 md:mr-32">
      <div className={`w-80 md:w-portfolioBackgroundDetail self-center md:self-auto h-portfolioBackgroundDetailHeight bg-portfolio-detail-${project.id} bg-auto bg-no-repeat md:bg-cover`}>

      </div>
      <div className="w-portFolioDescriptionWidth h-portFolioDescriptionHeight ml-0 md:ml-margin-portfolio">
      <p className="mb-5 font-roboto text-base text-black font-bold">Descripción:</p>
      <p className="mb-16 font-roboto text-base text-gray font-light">{project.description}</p>
      <p className="mb-8 font-roboto text-base text-black font-bold">Tecnologías implementadas:</p>
      <div className="grid grid-cols-3 gap-4">
      {technologies.map((technology,i) => 
         <div key={`tecno${i}`} className='w-tecnologyWidth h-tecnologyWidth bg-gray-light rounded-md'>
            <div className={`w-tecnologyWidth h-tecnologyWidth bg-technology-${technology} bg-no-repeat bg-center`}></div>
         </div>
      )}
      </div>
        <Link to={{ pathname: project.url }} target="_blank">
        <button className="bg-primary mt-8 w-40 rounded-md font-raleway font-bold text-tiny h-14 uppercase text-white">Visitar Sitio</button>
        </Link>
      </div>
    </div>
    <ContactSocial/>
    <Footer/>
    </>
  );
}

export default PortFolio;
