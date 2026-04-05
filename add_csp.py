import re

path = "next.config.mjs"
with open(path, "r") as f:
    content = f.read()

headers_config = """  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.gpteng.co https://www.google.com https://www.gstatic.com https://www.googletagmanager.com; connect-src 'self' wss: https:; img-src 'self' data: https: blob:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; frame-src https://www.google.com;"
          }
        ]
      }
    ]
  },
"""

if "async headers" not in content:
    content = content.replace("async redirects", headers_config + "  async redirects")

with open(path, "w") as f:
    f.write(content)

