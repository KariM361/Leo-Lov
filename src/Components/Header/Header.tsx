interface HeaderProps {
    //? gør at de bliver optionale.
    src?: string;
    alt?: string;
    bgColor?: string;
    text?: string;
}
export function Header({src, alt, bgColor, text }: HeaderProps) {

    if (src && alt ) { 
         return <img src={src} alt={alt}/>
}    else if (bgColor && text) 
         return (
         <div style={{backgroundColor: bgColor}}>
            <p>{text}</p>
         </div>
)
    return <p>No props supplied</p>
}