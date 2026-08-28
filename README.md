#  SolidJS + TypeScript

Enkel att-göra-lista byggd med [SolidJS](https://www.solidjs.com/) och TypeScript, som del av skoluppgiften "Frontend ramverk".

## Installation

```bash
npm install
npm run dev
```

Öppna sedan `http://localhost:5173`.

## Byggd för produktion

```bash
npm run build
```

## Använda delar av ramverket (G-krav: minst 4 av 7)

| Punkt | Var i koden |
| --- | --- |
| Databindning | `src/App.tsx` – `<input value={text()} onInput={...}>` |
| Villkorlig rendering | `src/App.tsx` – `<Show when={...} fallback={...}>` visar meddelande när listan är tom |
| Loop rendering | `src/App.tsx` – `<For each={todos()}>` renderar en `TodoItem` per uppgift |
| Klass- och stilbindning | `src/components/TodoItem.tsx` – `classList={{ done: props.done }}` för genomstruken text |
| Tillståndshantering | `src/App.tsx` – `createSignal` för listan av uppgifter och input-texten |
| Eventhantering | `src/App.tsx` / `TodoItem.tsx` – `onSubmit`, `onClick` för att lägga till, checka av och ta bort uppgifter |
| Komponenter | `src/components/TodoItem.tsx` – egen komponent som återanvänds i loopen |

## Klient-routing (VG-krav)

| Punkt | Var i koden |
| --- | --- |
| Klient-routing | `src/index.tsx` – `<Router>`/`<Route>` (`@solidjs/router`) mellan `/` (Todo-appen) och `/om` (`src/components/About.tsx`) |

Alla 7 G-punkter samt klient-routing används – uppfyller VG-kraven.
