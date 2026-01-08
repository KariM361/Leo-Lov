interface HeaderProps {
    src: string;
    alt: string;
}
export function Header({src,alt}: HeaderProps) {

    return <img src={src} alt={alt}/>
           
    }