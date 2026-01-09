import style from './Body.module.scss';
import image2 from '../assets/image2.jpg';
interface BodyProps {
    children: React.ReactNode;
}
export function Body({children}: BodyProps) {

    return (
       <section className={style.Body}>
            {children}
            <figcaption>
                <img src={image2} alt={'money-man'} />
                <h2>Intet Problem</h2>
                <p></p>
            </figcaption>
       </section>

       )
    }