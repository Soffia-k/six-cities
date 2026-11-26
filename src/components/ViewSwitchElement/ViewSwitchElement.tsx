type ViewSwitchElementType = {
    id: string;
    name: string;
    htmlTag: string;
    isChecked: boolean | undefined;
};

export function ViewSwitchElement({id, name, htmlTag, isChecked}: ViewSwitchElementType) {
    return (
        <>
            <input className="view-switch__input" type="radio" name="view" id={id} checked={isChecked} />
            <label className="view-switch__label" htmlFor={htmlTag}>{name}</label>
        </>
    );
}