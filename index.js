#!/usr/bin/env node
const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const $home = (p) => path.resolve(process.env.HOME, p);
const $dir = p => path.resolve(__dirname, p);

const CONSTS =
{
    ROOT_DIR : $home('.lpm/'),
    LIB_DIR : $home('.lpm/lib/'),
    PACKAGES_DIR : $home('.lpm/packages/'),
    DATABASE_DIR : $home('.lpm/lib/data.db'),
    INDEX_DIR : $home('.lpm/lib/index.js'),
    PACKAGE_JSON_DIR : $home('.lpm/lib/package.json'),
    BASHRC_DIR : $home('.bashrc'),
    LPM_TGZ_PATH : $dir('lpm.tgz'),
    LPM_TGZ_DEST : $home('.lpm/lib/lpm.tgz'),
}

fs.mkdirSync(CONSTS.ROOT_DIR);
fs.mkdirSync(CONSTS.LIB_DIR);
fs.mkdirSync(CONSTS.PACKAGES_DIR);

fs.copyFileSync(CONSTS.LPM_TGZ_PATH, CONSTS.LPM_TGZ_DEST);


const nuevaLinea = `
lpm()
{
    node ~/.lpm/lib/index.js $1 $2 $3 $4
}`;

fs.appendFileSync(CONSTS.BASHRC_DIR, nuevaLinea, "utf-8");

spawnSync("sh", ["-c", "cd ~/.lpm/lib/ && tar -xzvf lpm.tgz && rm lpm.tgz && npm install && cd ~ && source ~/.bashrc"], { stdio: "inherit" })

console.log("lpm ha sido instalado");