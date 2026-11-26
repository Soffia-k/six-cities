import { CitiesLink } from "../CitiesLink/CitiesLink";

export function Navigation() {
    return (
        <>
            <h1 className="visually-hidden">Cities</h1>
            <nav className="cities" aria-label="Cities">
                <div className="container">
                    <ul className="cities__list">
                        <CitiesLink className="cities__link" href="#" name="Paris" />
                        <CitiesLink className="cities__link" href="#" name="Cologne" />
                        <CitiesLink className="cities__link" href="#" name="Brussels" />
                        <CitiesLink className="cities__link cities__link--active" href="#" aria-current="page" name="Amsterdam" />
                        <CitiesLink className="cities__link" href="#" name="Hamburg" />
                        <CitiesLink className="cities__link" href="#" name="Dusseldorf" />
                    </ul>
                </div>
            </nav>
        </>
    );
}