## Requirements before running the project

1. You'll need to install Deno if you haven't already. You can follow the installation instructions [here](https://deno.land/)

## Running the project

1. Run the command `deno bundle .\src\app.tsx .\public\static\app.bundle.js` to bundle the react project
2. Run the server using `deno run .\server\oak-server.ts`
    Note: You can also just press F5 as I've included a prefilled launch.json file in the .vscode folder
3. Open your browser to the url listed in the debug console output, which should be: http://localhost:8000