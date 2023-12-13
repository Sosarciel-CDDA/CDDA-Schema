const fs = require('fs');
const path = require('path');

// 指定要扫描的目录
const dir = './src/Schema/';
// 指定输出
const out = './src/Schema/index.ts';

// 读取目录中的所有文件
fs.readdir(dir, (err, files) => {
    if (err) throw (`读取目录时发生错误: ${err}`);
    // 过滤出 .ts 文件，并排除 index.ts 文件
    // 过滤出 .ts 文件（排除 index.ts 文件）和文件夹
    const tsFilesAndDirs = files.filter(file => {
        const fullPath = path.join(dir, file);
        const isDirectory = fs.statSync(fullPath).isDirectory();
        return isDirectory || (file.endsWith('.ts') && file !== 'index.ts');
    });

    // 为每个 .ts 文件生成一个 export 语句
    const exports = tsFilesAndDirs.map(file => {
        // 移除文件扩展名
        const basename = path.basename(file, '.ts');
        return `export * from './${basename}';`;
    });

    // 将 export 语句写入到指定的文件中
    fs.writeFile(out, exports.join('\n'), err => {
        if (err) throw (`写入文件时发生错误: ${err}`);
        console.log(`成功写入到 ${out}`);
    });
});
