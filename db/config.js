exports.config = {
  MONGODB_URI:
    "mongodb+srv://dentro:Jaytru1997@testmongo.audj8.mongodb.net/keywebsite?retryWrites=true&w=majority",
  PORT: 8080,
  URL: "keynigeria.org.ng",
  ORG_NAME: "Kingdom Envoy International Church",
  ADDRESS:
    "The Spirit Center, Jesus Street, Ekredjebor, Ughelli, Delta State, Nigeria, 333105",
  ENVIRONMENT: "local", //prod
  JWT_SECRET:
    "my-secure-secret-that-is-going-to-be-changed-in-production-dfj80454659*^788798gbJ5uCljshjs8%65tK)394fn835+)",
  JWT_EXPIRES_IN: "2d",
  JWT_COOKIE_EXPIRES_IN: 5,

  //   CHURCH SPECIFIC DETAILS
  KEY_MAP:
    "https://www.google.com/search?q=kingdom+envoy&rlz=1C1CHWL_enNG976NG976&oq=king&aqs=chrome.1.69i57j35i39j46i512j0i433i512l2j0i512j69i60l2.3976j0j7&sourceid=chrome&ie=UTF-8#",
  GIVE_SEED: "https://flutterwave.com/pay/key-seed",
  GIVE_TITHE_OFFERING: "https://flutterwave.com/pay/key-tithe-and-offering",
  GIVE_PARTNERSHIP: "https://flutterwave.com/pay/key-partnership",
  GIVE_FIRST_FRUIT: "https://flutterwave.com/pay/key-first-fruit",
  SPOTIFY_LINK: "https://spotifyanchor-web.app.link/e/vHhq0qv75sb",
  //   Test Mailer Config
  MAILTRAP_HOST: "smtp.mailtrap.io",
  MAILTRAP_PORT: 2525,
  MAILTRAP_USERNAME: "cc9cab28dbe76f",
  MAILTRAP_PASSWORD: "fd2f9b7b9c3062",
  //   Production Mailer Config
  MAIL_ADDR: "dentropay@gmail.com",
  MAIL_DISPLAYNAME: "Kingdom Envoy",
  MAIL_SECRET: "KeyNigeria911@",
  MAIL_HOST: "smtp.titan.email",
  MAIL_PORT: 587,
  // MAIL_SERVICE: 'gmail',
};
