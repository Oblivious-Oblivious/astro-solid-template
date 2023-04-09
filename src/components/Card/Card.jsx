import "./Card.css";

export default function Card({href, title, body}) {
    return <>
        <div class="link-card">
            <a href={href}>
                <div class="link-title">{title}&nbsp;<span>&rarr;</span></div>
                <div class="link-body">{body}</div>
            </a>
        </div>
    </>;
}
