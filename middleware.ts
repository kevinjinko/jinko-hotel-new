import { NextRequest } from 'next/server';

export const config = { 
  runtime: 'edge',
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};

const TRACKING_URL = 'https://api.smalk.ai/api/v1/tracking/visit';

export default async function middleware(req: NextRequest) {
  // 1. Build metadata from incoming request
  const url = new URL(req.url);
  const metadata = {
    request_path: url.pathname + url.search,
    request_method: req.method,
    request_headers: {
      'user-agent': req.headers.get('user-agent') ?? '',
      'referer': req.headers.get('referer') ?? '',
      'accept-language': req.headers.get('accept-language') ?? '',
      'host': req.headers.get('host') ?? '',
    },
  };

  // 2. Fire-and-forget tracking call (non-blocking)
  fetch(TRACKING_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Api-Key ${process.env.SMALK_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(metadata),
  }).catch(() => {
    // Silently handle any errors to ensure non-blocking behavior
  });

  // 3. Continue request chain unchanged
  return;
}
