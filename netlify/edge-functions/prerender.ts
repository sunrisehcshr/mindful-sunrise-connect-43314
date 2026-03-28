import type { Context, Config } from "@netlify/edge-functions";

const BOT_USER_AGENTS = [
  "googlebot",
  "bingbot",
  "yandex",
  "baiduspider",
  "facebookexternalhit",
  "twitterbot",
  "rogerbot",
  "linkedinbot",
  "embedly",
  "quora link preview",
  "showyoubot",
  "outbrain",
  "pinterest/0.",
  "pinterestbot",
  "slackbot",
  "vkshare",
  "w3c_validator",
  "whatsapp",
  "redditbot",
  "applebot",
  "flipboard",
  "tumblr",
  "bitlybot",
  "skypeuripreview",
  "nuzzel",
  "discordbot",
  "google page speed",
  "qwantify",
  "developers.google.com/+/web/snippet",
  "google-inspectiontool",
];

const IGNORED_EXTENSIONS = [
  ".js",
  ".css",
  ".xml",
  ".less",
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".pdf",
  ".doc",
  ".txt",
  ".ico",
  ".rss",
  ".zip",
  ".mp3",
  ".rar",
  ".exe",
  ".wmv",
  ".doc",
  ".avi",
  ".ppt",
  ".mpg",
  ".mpeg",
  ".tif",
  ".wav",
  ".mov",
  ".psd",
  ".ai",
  ".xls",
  ".mp4",
  ".m4a",
  ".swf",
  ".dat",
  ".dmg",
  ".iso",
  ".flv",
  ".m4v",
  ".torrent",
  ".woff",
  ".woff2",
  ".ttf",
  ".svg",
  ".webmanifest",
  ".webp",
  ".avif",
];

export default async function handler(req: Request, context: Context) {
  const url = new URL(req.url);
  const pathname = url.pathname.toLowerCase();

  // Skip static assets
  if (IGNORED_EXTENSIONS.some((ext) => pathname.endsWith(ext))) {
    return;
  }

  const userAgent = (req.headers.get("user-agent") || "").toLowerCase();

  // Check if the request is from a bot
  const isBot = BOT_USER_AGENTS.some((bot) => userAgent.includes(bot));

  // Also check for _escaped_fragment_ query param (legacy AJAX crawling)
  const hasEscapedFragment = url.searchParams.has("_escaped_fragment_");

  if (!isBot && !hasEscapedFragment) {
    return;
  }

  const prerenderToken = Netlify.env.get("PRERENDER_TOKEN");

  if (!prerenderToken) {
    // No token configured, skip prerendering
    return;
  }

  // Build the prerender.io URL
  const prerenderUrl = `https://service.prerender.io/${url.toString()}`;

  try {
    const prerenderResponse = await fetch(prerenderUrl, {
      headers: {
        "X-Prerender-Token": prerenderToken,
      },
      redirect: "follow",
    });

    if (!prerenderResponse.ok) {
      // If prerender fails, fall through to the SPA
      return;
    }

    const body = await prerenderResponse.text();
    const status = prerenderResponse.status;

    return new Response(body, {
      status,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "X-Prerender": "1",
        "Cache-Control": "public, max-age=300",
      },
    });
  } catch {
    // On error, fall through to normal SPA rendering
    return;
  }
}

export const config: Config = {
  path: "/*",
  excludedPath: ["/assets/*", "/images/*", "/lovable-uploads/*"],
};
