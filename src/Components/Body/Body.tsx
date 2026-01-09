import style from './Body.module.scss';
interface BodyProps {
    children: React.ReactNode;
}
export function Body({children}: BodyProps) {

    return (
       <section className={style.Body}>
            {children}
       </section>

       )
    }