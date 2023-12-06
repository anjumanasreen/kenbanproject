import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFileInvoiceDollar, faCalculator, faArrowsRotate,faStopwatch,faWallet,faChartSimple,faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBuilding,faFolder,faUser,faClock,faCalendarDays } from "@fortawesome/free-regular-svg-icons";


const Sidemenu = () =>{
    return(
        <div className="grid fixed bg-black side-container w-auto p-[10px] h-[100%]">
        <div className="pb-[30px] text-xl text-center"><FontAwesomeIcon icon={faHouse} /></div>
        <div className="pb-[30px] text-xl text-center"><FontAwesomeIcon icon={faBuilding} /></div>
        <div className="pb-[30px] text-xl text-center"><FontAwesomeIcon icon={faFolder} /></div>
        <div className="pb-[30px] text-xl text-center"><FontAwesomeIcon icon={faUser} /></div>
        <div className="pb-[30px] text-xl text-center"><FontAwesomeIcon icon={faFileInvoiceDollar} /></div>
        <div className="pb-[30px] text-xl text-center"><FontAwesomeIcon icon={faCalculator} /></div>
        <div className="pb-[30px] text-xl text-center"><FontAwesomeIcon icon={faArrowsRotate} /></div>
        <div className="pb-[30px] text-xl text-center"><FontAwesomeIcon icon={faWallet} /></div>
        <div className="pb-[30px] text-xl text-center"><FontAwesomeIcon icon={faChartSimple} /></div>
        <div className="pb-[30px] text-xl text-center"><FontAwesomeIcon icon={faClock} /></div>
        <div className="pb-[30px] text-xl text-center"><FontAwesomeIcon icon={faCalendarDays} /></div>
        <div className="pb-[30px] text-xl text-center"><FontAwesomeIcon icon={faPlus} /></div>
        <div className="pb-[30px] text-xl text-center"><FontAwesomeIcon icon={faStopwatch} /></div>
    </div>
)
    
}
export default Sidemenu;