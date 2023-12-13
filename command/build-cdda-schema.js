#!/usr/bin/env node

const { buildCddaSchema } = require('../index');
const { program } = require("commander");

program
    .version("0.0.1")
    .description("构造CddaSchema")
    .option("-o, --output <string>","输出文件夹, 默认为: shell路径/CddaSchema/")
    .parse(process.argv);
const opts = program.opts();
const rootPath = process.cwd();
console.log('当前目录:'     , rootPath);
console.log('命令行参数:'   , process.argv);
console.log('解析结果:'     , opts);

const outputDir = opts.output;

async function main() {
    // 调用 buildSchema 函数
    await buildCddaSchema(outputDir);
    console.log("完成");
}

main().catch(error => {
    console.error(error);
    process.exit(1);
});
