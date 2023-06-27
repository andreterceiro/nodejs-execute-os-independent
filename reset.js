const fs = require('fs');

if (! fs.existsSync("teste.json")) {
    fs.writeFileSync(
        "teste.json",
        '{"c": "1", "b": "2 2"}'
    )
}