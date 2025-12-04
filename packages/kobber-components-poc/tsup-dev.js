// NOTE(sølve): created this script because vanilla extract can throw
// fatal erros that will kill a normal watch process. To make dev
// experience a bit better, this script re-runs it for you.
import { spawn } from "child_process";

function start() {
  const p = spawn("tsup", ["--watch"], {
    stdio: "inherit",
  });

  p.on("exit", () => {
    console.log(`tsup exited, restarting...`);
    start();
  });
}

start();
