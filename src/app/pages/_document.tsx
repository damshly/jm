import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    // هنا تفترض أن direction تأخذ من مكان ما، مؤقتاً نعطي rtl أو ltr
    // لكن في حالتك، ستحتاج تمريرها عبر props أو context أو من i18n

    // مثلاً تخليها "rtl" يدوياً لتجربة:
    const direction = 'rtl'; // غيرها حسب لغتك

    return (
      <Html dir={direction} lang={direction === 'rtl' ? 'ar' : 'en'}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
