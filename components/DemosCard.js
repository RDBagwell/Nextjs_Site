import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import cardStyle from 'cardStyle.css';
export default function DemosCard(){
  return(
        <div className='cardContainer'>
            <Image src='/images/7T9364v.gif' width={300} height={300} alt="Title" />
            <div className="cardTitle">
                Card01
            </div>
        </div>
  )  
}