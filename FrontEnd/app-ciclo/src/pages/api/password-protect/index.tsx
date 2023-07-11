// api/password-protect.ts
import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import CryptoJS from "crypto-js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
  }

  const password = req.body.password;

  if (process.env.PASSWORD_PROTECT === password) {
    // Si las contraseñas coinciden
    const encryptKey = process.env.ENCRYPT_KEY || "";
    const passowrdProtect = process.env.PASSWORD_PROTECT || "";
    // Encriptamos la contraseña
    const passwordEnctrypted = CryptoJS.AES.encrypt(
      passowrdProtect,
      encryptKey
    );
    // Y la guardamos en las cookies
    const cookie = serialize("login", passwordEnctrypted.toString(), {
      path: "/",
      httpOnly: true,
    });
    res.setHeader("Set-Cookie", cookie);
    res.redirect(302, "/admin");
  } else {
    const url = new URL("/password-protect", req.headers["origin"]);
    url.searchParams.append("error", "Contraseña Incorrecta");
    res.redirect(url.toString());
  }
}
