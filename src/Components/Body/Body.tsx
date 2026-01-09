import style from './Body.module.scss';
import image2 from "../../assets/image2.jpg"
interface BodyProps {
    children: React.ReactNode;
}
export function Body({children}: BodyProps) {

    return (
       <section className={style.Body}>
            {children}
            <figcaption className={style.bodybox}>
                <img src={image2} alt={'money-man'} />
                <h2>Intet Problem</h2>
                <article>
                <p>Leo-lov har altid været det bedste advokatfirma i verden. 
                Der er simpelthen ingen der kan måle sig med os. 
                Vi kan løse alle problemer så længe du har penge. 
                Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.
                Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!</p>
                </article>
            </figcaption>
       </section>

       )
    }