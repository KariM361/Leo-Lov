import style from './Nav.module.scss';

export const Nav = () => {

        return (
                <>
                        <nav>
                                <ul className={style.ul}>
                                        <li><a href="#">Hjem</a></li>
                                        <li><a href="#">Hvem er vi?</a></li>
                                        <li><a href="#">Åbningstider</a></li>
                                </ul>
                        </nav>
                </>
        )
};