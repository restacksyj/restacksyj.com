import type { MiddlewareHandler } from "astro";

const getData = () => {
    return { "data": { "redirect_url": "google.com" } };
}

export const onRequest: MiddlewareHandler = async (context, next) => {
    const host = context.request.headers.get('host');
    const subdomain = host?.split('.')[0];

    if (subdomain && subdomain !== 'www') {
        const { data } = getData();
        if (data?.redirect_url) {
            const encoded = encodeURIComponent(data.redirect_url);
            return context.redirect(`/redirect?to=${encoded}`);
        }
    }

    return next();
}
