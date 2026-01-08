import style from './Nav.module.scss';

export const Nav = () => {

        return (
                <>
                        <nav>
                                <ul className={style.ul}>
                                        <li><a href="#">Hjem</a></li>
                                        <li><a href="#">Advokaterne</a></li>
                                        <li><a href="#">om LeoLov</a></li>
                                        <li><a href="#">Kontakt</a></li>
                                </ul>
                        </nav>
                </>
        )
};