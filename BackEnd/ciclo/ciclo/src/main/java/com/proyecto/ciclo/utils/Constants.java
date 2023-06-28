package com.proyecto.ciclo.utils;

import java.util.Arrays;
import java.util.List;

public class Constants {
  public static final List<String> ALLOWED_METHODS = Arrays.asList("DELETE", "GET", "POST", "PUT");
  public static final List<String> ALLOWED_ORIGINS = Arrays.asList(
      "http://127.0.0.1:8080",
      "http://localhost:8080",
      "http://127.0.0.1:8084",
      "http://localhost:8084",
      "http://localhost:3000",
      "http://127.0.0.1:3000",
      "http://localhost:3001",
      "http://127.0.0.1:3001",
      "http://localhost:3002",
      "http://127.0.0.1:3002",
      "http://localhost:3003",
      "http://127.0.0.1:3003",
      "https://www.ciclosoluciones.com/",
      "https://ciclosoluciones.com/",
      "http://192.168.230.58",
      "http://192.168.230.58:3000",
      "http://192.168.230.58:8084");
  public static final List<String> ALLOWED_HEADERS = Arrays.asList(
      "Accept",
      "Accept-Encoding",
      "Accept-Language",
      "Access-Control-Allow-Credentials",
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Methods",
      "Access-Control-Allow-Origin",
      "Access-Control-Request-Headers",
      "Access-Control-Request-Method",
      "Authorization", "Cache-Control",
      "Connection",
      "Content-Type",
      "Host",
      "Origin",
      "Referer",
      "Sec-Fetch-Dest",
      "Sec-Fetch-Mode",
      "Sec-Fetch-Site",
      "User-Agent",
      "X-Copyright",
      "X-Frame-Options",
      "X-Vendor");
}