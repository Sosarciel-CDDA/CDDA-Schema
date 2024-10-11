import { UtilDT } from "@zwa73/dev-utils";
import path from 'pathe';
const { generateSchema } = UtilDT;


const rootDir = process.cwd();
const schemaDir = path.join(rootDir,'src','Schema');
generateSchema(schemaDir);
(async ()=>{
    const regex = /"allOf"/
})();