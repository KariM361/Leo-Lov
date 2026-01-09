import style from './Header.module.scss';
import headerimage from '../../assets/Headerimg.jpg'


export function Header() {
    return(
   <div className={style.HeaderImages}>
    <img className={style.HeaderImages}src={headerimage} alt={"tabel"} />
    <h1>Leo<span>-Lov</span></h1>
   </div>
    )
}