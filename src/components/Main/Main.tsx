import { Navigation } from "../Navigation/Navigation";
import { PlacesLayout } from "../PlacesLayout/PlacesLayout";

export function Main() {
    return (
        <main className="page__main">
            <Navigation/>
            <PlacesLayout/>
        </main >
    );
}