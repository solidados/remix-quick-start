import { Links, Meta, Outlet, Scripts } from "@remix-run/react";

const App = () => {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
        <title>Remix Quick Start</title>
      </head>
      <body>
        <h1>Remix Quick Start</h1>
        <Outlet />

        <Scripts />
      </body>
    </html>
  );
};

export default App;
