<?xml version="1.0" encoding="utf-8"?>
<!--
  Human-readable rendering for /rss.xml. Browsers apply this stylesheet when a
  person opens the feed URL directly; feed readers ignore it entirely.
-->
<xsl:stylesheet
  version="3.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns="http://www.w3.org/1999/xhtml"
>
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title><xsl:value-of select="/rss/channel/title" /> &#8212; RSS feed</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <style>
          :root { color-scheme: light dark; }
          body {
            margin: 0 auto;
            padding: 3rem 1.25rem;
            max-width: 48rem;
            font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI",
              Roboto, "Helvetica Neue", Arial, sans-serif;
            line-height: 1.6;
            color: #0a2463;
            background: #fff;
          }
          a { color: #ff4564; }
          a:hover { text-decoration: none; }
          .banner {
            padding: 1rem 1.25rem;
            margin-bottom: 2.5rem;
            background: #f2f5fa;
            border-radius: 5px;
            font-size: 0.95rem;
          }
          h1 { font-size: 1.75rem; margin: 0 0 0.5rem; }
          h2 { font-size: 1.15rem; margin: 0 0 0.35rem; }
          .subtitle { color: #657084; margin: 0 0 2.5rem; }
          article { padding-bottom: 2rem; margin-bottom: 2rem; border-bottom: 1px solid #e6eaf1; }
          article:last-of-type { border-bottom: 0; }
          time { display: block; color: #838ea4; font-size: 0.85rem; margin-bottom: 0.5rem; }
          @media (prefers-color-scheme: dark) {
            body { color: #e6eaf1; background: #0d1117; }
            .banner { background: #161b22; }
            .subtitle { color: #acb4c4; }
            article { border-color: #21262d; }
          }
        </style>
      </head>
      <body>
        <p class="banner">
          This is an RSS feed. Paste this page's address into a feed reader to
          subscribe, or visit
          <a href="{/rss/channel/link}"><xsl:value-of select="/rss/channel/link" /></a>
          to read on the web.
        </p>
        <h1><xsl:value-of select="/rss/channel/title" /></h1>
        <p class="subtitle"><xsl:value-of select="/rss/channel/description" /></p>
        <xsl:for-each select="/rss/channel/item">
          <article>
            <time><xsl:value-of select="pubDate" /></time>
            <h2><a href="{link}"><xsl:value-of select="title" /></a></h2>
            <p><xsl:value-of select="description" disable-output-escaping="yes" /></p>
          </article>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
