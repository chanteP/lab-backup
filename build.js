const fs = require('fs');
const glob = require('glob');

const labs = glob.sync('./labs/*');

let labsList = labs.filter((l) => {
    return l !== './labs/index.html';
}).map((l) => {
    let fileName = l.split('/').pop();
    let [match, pureFileName, isFile] = /([^\/]+?)(\.[\w]+)?$/.exec(fileName) || [];
    return {
        name: pureFileName,
        path: isFile ? fileName : (fileName + '/index.html')
    };
});

let indexList = labsList.map((l) => {
    return '<a class="table-cell active" href="'+l.path+'">'+l.name+'</a>';
});

var layout = fs.readFileSync('./static/layout.html');


buildFile('index.html', layout, {
    body: indexList.join('\n')
});








function buildFile(name, layout, data){
    var newDoc = (layout + '').replace(/\$\{([\w]+)\}/g, (match, key) => {
        return data[key] || '';
    });
    fs.writeFileSync('./labs/'+name, newDoc);
}