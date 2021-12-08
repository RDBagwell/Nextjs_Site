import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import cardStyle from './cardStyle.module.css';

export default function DemosCard(cardItem){
  const {title, path, imageURL} = cardItem.cardItem;
  let image = imageURL
  if(image == ''){image = '/images/7T9364v.gif';}
  return(
    <Link href={path}>
      <div className={cardStyle.cardContainer}>
          <Image src={image} width={250} height={250} alt={title} />
          <div className={cardStyle.cardTitle}>
            {title}
          </div>
      </div>
    </Link>
  )  
}