export default function Head({title}) {
    return <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />

        {/* Prevent HTTP caching */}
        {/* <meta http-equiv="Cache-Control" content="private, no-store" /> */}

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Description */}
        <meta name="description" content="Astro SolidJS Template" />

        {/* Page Icon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        {/* Title */}
        <title>{title}</title>
    </head>
}
