import { exec, type ExecOptions } from "node:child_process";
import util from "node:util";

export interface ConsoleOutput {
  stdout: string;
  stderr: string;
}

const execAsyncFunction = util.promisify(exec);

let consoleOutput = "";

export const getConsoleOutput = () => consoleOutput;

export const execAsync = async (
  command: string,
  options?: Omit<ExecOptions, "enconding">,
): Promise<ConsoleOutput | undefined> => {
  try {
    const output = await execAsyncFunction(command, { ...options, encoding: "utf8" });
    consoleOutput += `${command}\n\n${output.stdout}\n\n${output.stderr}\n\n\n\n`;
    return output;
  } catch (error) {
    consoleOutput += JSON.stringify(error);
    return;
  }
};
