/** Alternative to simply using a for external links which removes the need to repeat the target and rel for each link */
export default function A(props: { href: string, target?: string, children: any }) {
    return (
        <a href={props.href} target={props.target || "_self"} rel="noreferrer">{props.children}</a>
    )
}