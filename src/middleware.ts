// import type { MiddlewareHandler } from "astro";
//
// const getData = () => {
//     return { "data": { "redirect_url": "google.com" } };
// }
//
// export const onRequest: MiddlewareHandler = async (context, next) => {
//     const host = context.request.headers.get('host');
//     const subdomain = host?.split('.')[0];
//     console.log('Middleware running, host:', context.request.headers.get('host'));
//
//     if (subdomain && subdomain !== 'www') {
//         const { data } = getData();
//         if (data?.redirect_url) {
//             const encoded = encodeURIComponent(data.redirect_url);
//             return context.redirect(`/redirect?to=${encoded}`);
//         }
//     }
//
//     return next();
// }

// src/middleware.ts
import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context, next) => {
    const url = new URL(context.request.url);
    const host = context.request.headers.get('host');
    const subdomain = host?.split('.')[0];

    // 👇 prevent redirect loop
    if (url.pathname === '/redirect') {
        return next();
    }

    if (subdomain === 'url') {
        const target = encodeURIComponent('https://google.com'); // or Supabase logic
        return context.redirect(`/redirect?to=${target}`);
    }

    return next();
};

