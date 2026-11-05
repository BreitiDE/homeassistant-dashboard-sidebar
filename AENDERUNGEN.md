# Sidebar nur für bestimmte Benutzer anzeigen

Neue Option `users` unter `dashboard_sidebar`: Liste von Home-Assistant-Benutzern
(User-ID oder Anzeigename, Groß-/Kleinschreibung egal). Fehlt der Schlüssel,
sehen alle die Sidebar wie bisher.

```yaml
dashboard_sidebar:
  users:
    - Stefan
    - 3f2a9c0e8b1d4e6fa7c5b2d1e0f9a8b7   # User-ID (so speichert es der Editor)
  body: ...
```

- Visueller Editor: Settings → "Visible To" listet alle Benutzer als Checkboxen
  (System-User wie Supervisor ausgeblendet). Keine Box angehakt = alle.
- Im Bearbeitungsmodus wird die Sidebar immer angezeigt, damit ein Admin, der
  nicht in der Liste steht, den Editor trotzdem erreicht.
- Nur Anzeige-Filter, keine Zugriffskontrolle.

## Installation ohne Build
`dist/dashboard-sidebar-card.js` nach `/config/www/` kopieren (bzw. die
HACS-Datei unter `/config/www/community/...` ersetzen), Browser-Cache leeren
bzw. `?v=` der Ressource hochzählen.

## Geänderte Dateien
- `src/lib/users.ts` (neu) – Sichtbarkeitslogik
- `src/lib/bootstrap.ts` – Sidebar wird für nicht gelistete User nicht eingebaut
- `src/lib/types.ts` – neue Option `users`
- `src/lib/validate.ts` – Validierung der Option
- `src/editor/sidebar-editor.ts` – Benutzerauswahl im Settings-Tab
- `src/lib/schema.generated.ts`, `docs/reference.md` – regeneriert (npm run schema:gen / docs:config)
- `docs/configuration.md` – Doku-Abschnitt "Per-user visibility"
- Tests: `src/lib/users.test.ts` (neu), `src/lib/validate.test.ts`, `src/editor/sidebar-editor.browser.test.ts`

`user-visibility.patch` enthält alles als Git-Diff (`git apply user-visibility.patch`).
