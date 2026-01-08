interface Cardprops {
      children: React.ReactNode;
}
export function Card({children}: Cardprops) {
    
 return (  
    <div>
         {children}
    </div>
 )
}