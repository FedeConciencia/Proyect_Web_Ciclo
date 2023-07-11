import { NextRequest, NextResponse } from "next/server";
import CryptoJS from "crypto-js";


export async function middleware(req: NextRequest) {
  const isPasswordEnabled = !!process.env.PASSWORD_PROTECT;
  const password = process.env.PASSWORD_PROTECT
  const encryptKey = process.env.ENCRYPT_KEY || '';
  const isLoggedIn = req.cookies.has("login");
  const loginValue = req.cookies.get("login")?.value || ''

  // Desncriptamos el valor de la cookie
  const decrypted = CryptoJS.AES.decrypt(loginValue, encryptKey).toString(
    CryptoJS.enc.Utf8
  );

  // Revisamos Si machea con la contraseña de las .env
  const matchLoggin = isLoggedIn
    ? decrypted == password
    : false;

  const isPathPasswordProtect = req.nextUrl.pathname.startsWith("/password-protect");
  // Revisamos si esta todo correcto, para logearse o puede seguir navegando
  if (isPasswordEnabled && !matchLoggin && !isPathPasswordProtect) {
    return NextResponse.redirect(new URL("/password-protect", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - favicon.ico (favicon file)
     */
    "/(admin.*)",
  ],
};
