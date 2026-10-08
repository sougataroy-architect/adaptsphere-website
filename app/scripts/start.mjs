import { spawn } from "node:child_process";
const child=spawn(process.execPath,["node_modules/next/dist/bin/next","start","-p",process.env.PORT || "3215"],{stdio:"inherit"});
for (const signal of ["SIGTERM","SIGINT"]) process.on(signal,()=>child.kill(signal));
child.on("exit",code=>process.exit(code??1));
