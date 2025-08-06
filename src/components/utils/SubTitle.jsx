import { FaTags } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const SubTitle = ({title, prevClick, nextCilick}) => {
    return (
        <div className="top_slide">
            <h2>
                <FaTags /> {title}
            </h2>

            <div className="btnSlides">
                <div className="btn left" onClick={prevClick}>
                    <IoIosArrowBack />
                </div>
                <div className="btn right" onClick={nextCilick}>
                    <IoIosArrowForward />
                </div>
            </div>
        </div>
    )
}

export default SubTitle
