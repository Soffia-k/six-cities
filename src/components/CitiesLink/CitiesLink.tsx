type CitiesLinkType = {
    name: string;
    href: string;
    className: string;
    [key: string]: unknown;
};

export function CitiesLink({ name, href, className, ...rest }: CitiesLinkType) {
    return (
        <li>
            <a className={className || 'cities__link'} href={href} {...rest}>
                {name}
            </a>
        </li>
    );
}