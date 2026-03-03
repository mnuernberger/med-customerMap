# Deutschland Vertriebskarte

Interaktive Web-App zur Darstellung von B2B-SaaS-Vertriebsgebieten auf einer Deutschlandkarte (Kreisebene).

## Schnellstart

1. `index.html` im Browser öffnen (Doppelklick genügt – kein lokaler Server nötig).
2. Beispiel-Excel laden oder eigene Datei hochladen.

> **Hinweis:** Der Browser muss externe Ressourcen laden können (Leaflet, SheetJS, GeoJSON).
> Bei Offline-Nutzung müssen die CDN-Skripte lokal eingebunden werden.

---

## Beispiel-Excel generieren

```bash
# Abhängigkeit installieren (einmalig)
npm install xlsx

# Beispieldatei erstellen
node generate_example.js
# → erstellt beispiel.xlsx im selben Verzeichnis
```

---

## Excel-Format

Die hochzuladende Datei muss folgende Spalten enthalten (Groß-/Kleinschreibung egal):

| Spalte     | Pflicht | Beschreibung |
|------------|---------|--------------|
| `ags`      | ✅      | Amtlicher Gemeindeschlüssel (5-stellig für Kreise) |
| `name`     | –       | Bezeichnung des Kreises (nur zur Anzeige) |
| `anbieter` | ✅      | Name des SaaS-Anbieters |
| `farbe`    | ✅      | Hex-Farbcode, z. B. `#e63946` |

**Beispiel:**

```
ags      | name                        | anbieter     | farbe
---------|-----------------------------|--------------|---------
09162    | München, Kreisfreie Stadt   | MedFlow GmbH | #e63946
05315    | Köln, Kreisfreie Stadt      | HealthNet AG | #457b9d
02000    | Hamburg                     | DocSoft      | #2a9d8f
```

**Regeln:**
- Die Farbe pro Anbieter wird aus der **ersten Zeile** dieses Anbieters übernommen.
- Kreise ohne Eintrag erscheinen hellgrau (`#cccccc`).
- Der AGS muss dem Kreisschlüssel aus dem genutzten GeoJSON-Datensatz entsprechen.

---

## AGS-Schlüssel finden

- Offizielle Liste: [Statistisches Bundesamt (Destatis)](https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/_inhalt.html)
- Die App verwendet **5-stellige Kreisschlüssel** (z. B. `09162` für München).
- Gemeindeschlüssel sind 8-stellig – für Gemeindeebene muss ein anderer GeoJSON-Datensatz eingebunden werden (siehe Kommentar in `index.html`).

---

## Funktionen

| Funktion | Beschreibung |
|----------|-------------|
| **Upload** | Excel per Klick oder Drag & Drop laden |
| **Einfärbung** | Kreise werden automatisch in Anbieterfarbe eingefärbt |
| **Hover** | Tooltip mit Kreis- und Anbieterinfo |
| **Klick** | Popup mit Detail-Informationen |
| **Suche** | Kreisname oder AGS eingeben → Karte zoomt zum Treffer |
| **Legende** | Wird automatisch aus den Anbieterdaten generiert |
| **Statistik** | Anzahl der Kreise je Anbieter in der Sidebar |
| **PNG-Export** | Aktuellen Kartenausschnitt als PNG speichern |

---

## Technischer Stack

- [Leaflet.js](https://leafletjs.com/) – interaktive Karte
- [SheetJS](https://sheetjs.com/) – Excel-Parsing
- [html2canvas](https://html2canvas.hertzen.com/) – PNG-Export
- [deutschlandGeoJSON](https://github.com/isellsoap/deutschlandGeoJSON) – Kreisgeometrien
- Vanilla HTML/CSS/JavaScript – kein Build-Schritt
