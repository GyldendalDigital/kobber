export const getCommandLineArguments = () =>
  Object.fromEntries(
    process.argv.slice(2).map(arg => {
      const [key, value] = arg.replace(/^--/, "").split("=");
      return [key, value ?? true]; // support --flag (boolean)
    }),
  );
