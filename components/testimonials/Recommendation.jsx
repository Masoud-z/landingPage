import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

function Recommendation({ star, text, img, name, location }) {
  const stars = [];
  for (let i = 0; i < Math.floor(star); i++) {
    stars.push(<FontAwesomeIcon className="text-cyan-500" icon={faStar} />);
  }
  if (star % 1) {
    stars.push(<FontAwesomeIcon className="text-cyan-500" icon={faStarHalf} />);
  }
  return (
    <section className="flex flex-col justify-start items-start gap-3 w-1/3 mx-[10vh]">
      <div className="flex justify-center items-center gap-2">{stars}</div>
      <p className="font-normal text-2xl">{text}</p>
      <div className="flex justify-start items-center gap-4 mt-3">
        <Image src={img} width="50" height="50" alt={name} />
        <div className="flex flex-col justify-around items-start h-[50px]">
          <p className="text-xs font-semibold">{name}</p>
          <p className="font-normal text-xs">{location}</p>
        </div>
      </div>
    </section>
  );
}

export default Recommendation;
