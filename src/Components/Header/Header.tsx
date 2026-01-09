import style from './Header.module.scss';

interface HeaderProps {
    //? gør at de bliver optionale.
    src?: string;
    alt?: string;
    bgColor?: string;
    text?: string;
}
export function Header({src, alt, bgColor, text }: HeaderProps) {

    if (src && alt ) { 
         return <img className={style.HeaderImages} src={src} alt={alt}/>
}    else if (bgColor && text) 
         return (
         <div className={style.HeaderText} style={{backgroundColor: bgColor}}>
            <p>{text}</p>
         </div>
)
    return <p>No props supplied</p>
}