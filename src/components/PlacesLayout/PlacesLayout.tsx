import { ViewSwitch } from "../ViewSwitch/ViewSwitch";

type RatingStyle = React.CSSProperties & {
  '--rating'?: string;
};

export function PlacesLayout() {

    const rating60: RatingStyle = {
        '--rating': '60%'
    };

    const rating80: RatingStyle = {
        '--rating': '80%'
    };

    const rating100: RatingStyle = {
        '--rating': '100%'
    };

    return (
        <div className="container places-layout">
            <ViewSwitch />

            <section className="places-layout__map" aria-label="Map">
                <div className="map">
                    <span className="map__pin" style={{ left: '22%', top: '30%', }}><svg aria-hidden="true"><use href="#icon-pin"></use></svg></span>
                    <span className="map__pin" style={{ left: '45%', top: '22%', }}><svg aria-hidden="true"><use href="#icon-pin"></use></svg></span>
                    <span className="map__pin map__pin--active" style={{ left: '62%', top: '40%', }}><svg aria-hidden="true"><use href="#icon-pin"></use></svg></span>
                    <span className="map__pin" style={{ left: '38%', top: '52%', }}><svg aria-hidden="true"><use href="#icon-pin"></use></svg></span>
                    <span className="map__pin" style={{ left: '70%', top: '63%', }}><svg aria-hidden="true"><use href="#icon-pin"></use></svg></span>
                    <span className="map__pin" style={{ left: '28%', top: '70%', }}><svg aria-hidden="true"><use href="#icon-pin"></use></svg></span>
                    <span className="map__pin" style={{ left: '55%', top: '78%', }}><svg aria-hidden="true"><use href="#icon-pin"></use></svg></span>
                    <span className="map__pin" style={{ left: '80%', top: '28%', }}><svg aria-hidden="true"><use href="#icon-pin"></use></svg></span>
                    <span className="map__note">Здесь - Яндекс Карты</span>
                </div>
            </section>

            <section className="places places-layout__list">
                <div className="places__head">
                    <h2 className="places__title">312 places to stay in Amsterdam</h2>
                    <div className="places__tools">
                        <label className="search">
                            <span className="visually-hidden">Search by title</span>
                            <svg className="search__icon" aria-hidden="true"><use href="#icon-search"></use></svg>
                            <input className="field search__input" type="search" placeholder="Search by title" value="" />
                        </label>
                        <div className="sort sort--opened">
                            <span className="sort__caption" id="sort-caption">Sort by</span>
                            <button className="sort__current" type="button" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="sort-caption sort-current">
                                <span id="sort-current">Popular</span>
                                <svg className="sort__arrow" aria-hidden="true"><use href="#icon-arrow"></use></svg>
                            </button>
                            <ul className="sort__list" role="listbox" aria-labelledby="sort-caption">
                                <li className="sort__option sort__option--active" role="option" aria-selected="true">Popular</li>
                                <li className="sort__option sort__option--focused" role="option" aria-selected="false">Price: low to high</li>
                                <li className="sort__option" role="option" aria-selected="false">Price: high to low</li>
                                <li className="sort__option" role="option" aria-selected="false">Top rated first</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="places-grid">
                    <article className="place-card">
                        <div className="place-card__image-wrapper">
                            <img className="place-card__image" src="img/offers/1.jpg" width="400" height="300" alt="Apartment" />
                            <span className="badge place-card__badge">Premium</span>
                            <button className="bookmark place-card__bookmark" type="button" aria-pressed="false">
                                <svg aria-hidden="true"><use href="#icon-bookmark"></use></svg>
                                <span className="visually-hidden">Add to favorites</span>
                            </button>
                        </div>
                        <div className="place-card__info">
                            <p className="place-card__price"><b>&euro;120</b> / night</p>
                            <div className="rating" aria-label="Rating 4 of 5"><span className="rating__fill" style={rating60}></span></div>
                            <h3 className="place-card__title"><a href="offer.html">Beautiful &amp; luxurious apartment at great location</a></h3>
                            <p className="place-card__type">apartment</p>
                        </div>
                    </article>
                    <article className="place-card">
                        <div className="place-card__image-wrapper">
                            <img className="place-card__image" src="img/offers/2.jpg" width="400" height="300" alt="Room" />
                            <button className="bookmark place-card__bookmark bookmark--active" type="button" aria-pressed="true">
                                <svg aria-hidden="true"><use href="#icon-bookmark"></use></svg>
                                <span className="visually-hidden">Remove from favorites</span>
                            </button>
                        </div>
                        <div className="place-card__info">
                            <p className="place-card__price"><b>&euro;80</b> / night</p>
                            <div className="rating" aria-label="Rating 4 of 5"><span className="rating__fill" style={rating80}></span></div>
                            <h3 className="place-card__title"><a href="offer.html">Wood and stone place</a></h3>
                            <p className="place-card__type">room</p>
                        </div>
                    </article>
                    <article className="place-card place-card--active">
                        <div className="place-card__image-wrapper">
                            <img className="place-card__image" src="img/offers/3.jpg" width="400" height="300" alt="Apartment" />
                            <button className="bookmark place-card__bookmark" type="button" aria-pressed="false">
                                <svg aria-hidden="true"><use href="#icon-bookmark"></use></svg>
                                <span className="visually-hidden">Add to favorites</span>
                            </button>
                        </div>
                        <div className="place-card__info">
                            <p className="place-card__price"><b>&euro;132</b> / night</p>
                            <div className="rating" aria-label="Rating 4 of 5"><span className="rating__fill" style={rating80}></span></div>
                            <h3 className="place-card__title"><a href="offer.html">Canal View Prinsengracht</a></h3>
                            <p className="place-card__type">apartment</p>
                        </div>
                    </article >
                    <article className="place-card">
                        <div className="place-card__image-wrapper">
                            <img className="place-card__image" src="img/offers/5.jpg" width="400" height="300" alt="Apartment" />
                            <span className="badge place-card__badge">Premium</span>
                            <button className="bookmark place-card__bookmark" type="button" aria-pressed="false">
                                <svg aria-hidden="true"><use href="#icon-bookmark"></use></svg>
                                <span className="visually-hidden">Add to favorites</span>
                            </button>
                        </div>
                        <div className="place-card__info">
                            <p className="place-card__price"><b>&euro;180</b> / night</p>
                            <div className="rating" aria-label="Rating 5 of 5"><span className="rating__fill" style={rating100}></span></div>
                            <h3 className="place-card__title"><a href="offer.html">Nice, cozy, warm big bed apartment</a></h3>
                            <p className="place-card__type">apartment</p>
                        </div>
                    </article >
                    <article className="place-card">
                        <div className="place-card__image-wrapper">
                            <img className="place-card__image" src="img/offers/9.jpg" width="400" height="300" alt="Room" />
                            <button className="bookmark place-card__bookmark bookmark--active" type="button" aria-pressed="true">
                                <svg aria-hidden="true"><use href="#icon-bookmark"></use></svg>
                                <span className="visually-hidden">Remove from favorites</span>
                            </button>
                        </div>
                        <div className="place-card__info">
                            <p className="place-card__price"><b>&euro;95</b> / night</p>
                            <div className="rating" aria-label="Rating 3 of 5"><span className="rating__fill" style={rating60}></span></div>
                            <h3 className="place-card__title"><a href="offer.html">Quiet corner near Vondelpark</a></h3>
                            <p className="place-card__type">room</p>
                        </div>
                    </article >
                    <article className="place-card">
                        <div className="place-card__image-wrapper">
                            <img className="place-card__image" src="img/offers/13.jpg" width="400" height="300" alt="House" />
                            <button className="bookmark place-card__bookmark" type="button" aria-pressed="false">
                                <svg aria-hidden="true"><use href="#icon-bookmark"></use></svg>
                                <span className="visually-hidden">Add to favorites</span>
                            </button>
                        </div>
                        <div className="place-card__info">
                            <p className="place-card__price"><b>&euro;240</b> / night</p>
                            <div className="rating" aria-label="Rating 5 of 5"><span className="rating__fill" style={rating100}></span></div>
                            <h3 className="place-card__title"><a href="offer.html">Forest house on the edge of the city</a></h3>
                            <p className="place-card__type">house</p>
                        </div>
                    </article >
                    <article className="place-card">
                        <div className="place-card__image-wrapper">
                            <img className="place-card__image" src="img/offers/7.jpg" width="400" height="300" alt="Apartment" />
                            <button className="bookmark place-card__bookmark" type="button" aria-pressed="false">
                                <svg aria-hidden="true"><use href="#icon-bookmark"></use></svg>
                                <span className="visually-hidden">Add to favorites</span>
                            </button>
                        </div>
                        <div className="place-card__info">
                            <p className="place-card__price"><b>&euro;150</b> / night</p>
                            <div className="rating" aria-label="Rating 4 of 5"><span className="rating__fill" style={rating80}></span></div>
                            <h3 className="place-card__title"><a href="offer.html">Warm loft with a dining room</a></h3>
                            <p className="place-card__type">apartment</p>
                        </div>
                    </article >
                    <article className="place-card">
                        <div className="place-card__image-wrapper">
                            <img className="place-card__image" src="img/offers/14.jpg" width="400" height="300" alt="House" />
                            <span className="badge place-card__badge">Premium</span>
                            <button className="bookmark place-card__bookmark bookmark--active" type="button" aria-pressed="true">
                                <svg aria-hidden="true"><use href="#icon-bookmark"></use></svg>
                                <span className="visually-hidden">Remove from favorites</span>
                            </button>
                        </div>
                        <div className="place-card__info">
                            <p className="place-card__price"><b>&euro;210</b> / night</p>
                            <div className="rating" aria-label="Rating 3 of 5"><span className="rating__fill" style={rating60}></span></div>
                            <h3 className="place-card__title"><a href="offer.html">Red house with a garden</a></h3>
                            <p className="place-card__type">house</p>
                        </div>
                    </article >
                </div >
                <p className="places__more">Прокрутите ниже - подгрузятся ещё предложения</p>

                <section className="recent" aria-labelledby="recent-title">
                    <h2 className="recent__title" id="recent-title">Recently viewed</h2>
                    <div className="recent__list">
                        <article className="place-card">
                            <div className="place-card__image-wrapper">
                                <img className="place-card__image" src="img/offers/13.jpg" width="400" height="300" alt="House" />
                                <button className="bookmark place-card__bookmark" type="button" aria-pressed="false">
                                    <svg aria-hidden="true"><use href="#icon-bookmark"></use></svg>
                                    <span className="visually-hidden">Add to favorites</span>
                                </button>
                            </div>
                            <div className="place-card__info">
                                <p className="place-card__price"><b>&euro;240</b> / night</p>
                                <div className="rating" aria-label="Rating 5 of 5"><span className="rating__fill" style={rating100}></span></div>
                                <h3 className="place-card__title"><a href="offer.html">Forest house on the edge of the city</a></h3>
                                <p className="place-card__type">house</p>
                            </div>
                        </article>
                        <article className="place-card">
                            <div className="place-card__image-wrapper">
                                <img className="place-card__image" src="img/offers/1.jpg" width="400" height="300" alt="Apartment" />
                                <span className="badge place-card__badge">Premium</span>
                                <button className="bookmark place-card__bookmark" type="button" aria-pressed="false">
                                    <svg aria-hidden="true"><use href="#icon-bookmark"></use></svg>
                                    <span className="visually-hidden">Add to favorites</span>
                                </button>
                            </div>
                            <div className="place-card__info">
                                <p className="place-card__price"><b>&euro;120</b> / night</p>
                                <div className="rating" aria-label="Rating 4 of 5"><span className="rating__fill" style={rating80}></span></div>
                                <h3 className="place-card__title"><a href="offer.html">Beautiful &amp; luxurious apartment at great location</a></h3>
                                <p className="place-card__type">apartment</p>
                            </div>
                        </article >
                        <article className="place-card">
                            <div className="place-card__image-wrapper">
                                <img className="place-card__image" src="img/offers/5.jpg" width="400" height="300" alt="Apartment" />
                                <span className="badge place-card__badge">Premium</span>
                                <button className="bookmark place-card__bookmark" type="button" aria-pressed="false">
                                    <svg aria-hidden="true"><use href="#icon-bookmark"></use></svg>
                                    <span className="visually-hidden">Add to favorites</span>
                                </button>
                            </div>
                            <div className="place-card__info">
                                <p className="place-card__price"><b>&euro;180</b> / night</p>
                                <div className="rating" aria-label="Rating 5 of 5"><span className="rating__fill" style={rating100}></span></div>
                                <h3 className="place-card__title"><a href="offer.html">Nice, cozy, warm big bed apartment</a></h3>
                                <p className="place-card__type">apartment</p>
                            </div>
                        </article >
                    </div >
                </section >
            </section >
        </div >
    );
}