const glob = require("glob");
const fs = require("fs");

const pattern = process.argv[2] || 'src/**/*.js';
const target = process.argv[3] || 'stories.js';
const prefix = process.argv[4] || '';

const options = {};
glob(pattern, options, function (err, files) {
  if (err) {
    console.log('err', err);
    return;
  }
  const str = `\
export default {\
  ${files.map(file => (`
  '${file}': require('${prefix}${file}'),\
`)).join('')}
};\
`;

  fs.writeFileSync(target, str);
})
