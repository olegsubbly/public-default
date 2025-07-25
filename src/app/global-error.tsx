'use client'

import NextError from 'next/error'
import Script from 'next/script'

export default function GlobalError() {
  return (
    <html>
      <body>
        {/* `NextError` is the default Next.js error page component. Its type
        definition requires a `statusCode` prop. However, since the App Router
        does not expose status codes for errors, we simply pass 0 to render a
        generic error message. */}
        <NextError statusCode={0} />
        <Script
          id="sandbox-messenger"
          src="https://abiscuit.io/sandbox-messenger.js"
          type="module"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
