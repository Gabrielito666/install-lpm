var{spawnSync:l}=require("child_process"),n=require("fs"),o=require("path"),c=s=>o.resolve(process.env.HOME,s),i=s=>o.resolve(__dirname,s),e={ROOT_DIR:c(".lpm/"),LIB_DIR:c(".lpm/lib/"),PACKAGES_DIR:c(".lpm/packages/"),DATABASE_DIR:c(".lpm/lib/data.db"),INDEX_DIR:c(".lpm/lib/index.js"),PACKAGE_JSON_DIR:c(".lpm/lib/package.json"),BASHRC_DIR:c(".bashrc"),INDEX_SRC:i("src/index.js"),PKG_JSON_SRC:i("src/package.json")};n.mkdirSync(e.ROOT_DIR);n.mkdirSync(e.LIB_DIR);n.mkdirSync(e.PACKAGES_DIR);var a=n.readFileSync(e.INDEX_SRC,"utf-8"),t=n.readFileSync(e.PKG_JSON_SRC,"utf-8");n.writeFileSync(e.INDEX_DIR,a,"utf-8");n.writeFileSync(e.PACKAGE_JSON_DIR,t,"utf-8");l("cd ~/.lpm/lib/ && npm install && cd ~");var S=`
lpm()
{
    node ~/.lpm/lib/index.js $1 $2 $3 $4
}`;n.appendFileSync(e.BASHRC_DIR,S,"utf-8");l("source ~/.bashrc");console.log("lpm ha sido instalado");
