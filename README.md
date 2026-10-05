# Werkbonnen – Van Eyen Technics

## Optie 1: installeerbare webapp (aanbevolen, werkt offline)
1. Zet de inhoud van de map `www/` online op een HTTPS-adres, bv. vaneyentechnics.be/werkbon (of gratis via Netlify Drop / GitHub Pages).
2. Open dat adres één keer met internet. Daarna werkt de app ook zonder internet.
3. iPhone: Safari > Deel > "Zet op beginscherm". Android: Chrome > menu > "App installeren".
4. Update uitrollen: bestanden vervangen en `wb-v1` in `sw.js` ophogen (bv. `wb-v2`).

## Optie 2: echte app-pakketten (Android/iOS) met Capacitor
Vraag aan Claude Code: "Bouw dit Capacitor-project voor Android en iOS, en voeg de Share- en Filesystem-plugin toe zodat de pdf-export in de app werkt."
Handmatig: `npm install`, `npx cap add android`, `npx cap add ios`, `npx cap sync`, daarna `npx cap open android` of `npx cap open ios`.
- Android: in Android Studio een APK bouwen en die rechtstreeks op je toestel installeren.
- iOS: vereist een Mac met Xcode. Installeren op je eigen iPhone kan met een gratis Apple-ID (app verloopt na 7 dagen) of met een Apple Developer-account.

Gegevens staan lokaal op het toestel. Maak dus regelmatig een pdf van afgeronde werkbonnen.
