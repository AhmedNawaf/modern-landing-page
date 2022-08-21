import styles from "../style";
import { arrowUp } from "../assets";


const GetStarted = () => (
  <div className={`${styles.flexCenter} w-36 h-36 rounded-full bg-blue-gradient p-1 cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary  w-full h-full rounded-full`}>
      <div className={`${styles.flexStart}`}>
        <span className="text-gradient font-poppins font-medium text-lg leading-6 mr-2">Get</span>
        <img src={arrowUp} alt="arrowUp" className=" w-6 h-6 object-contain" />
      </div>
      <p className="font-poppins font-medium text-lg leading-6">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
)

export default GetStarted