import style from './Card.module.scss';

interface Cardprops {
      children: React.ReactNode;
}
export function Card({children}: Cardprops) {
    
 return (  
    <div className={style.cardStyle}>
         {children}
    </div>
 )
}