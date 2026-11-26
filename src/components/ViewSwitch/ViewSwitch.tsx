import { ViewSwitchElement } from "../ViewSwitchElement/ViewSwitchElement";

export function ViewSwitch() {
    return (
        <div className="view-switch" role="radiogroup" aria-label="View">
            <ViewSwitchElement name="List" id="view-list" htmlTag="view-list" isChecked={true} />
            <ViewSwitchElement name="Map" id="view-map" htmlTag="view-map" isChecked={false} />
        </div>
    );
}