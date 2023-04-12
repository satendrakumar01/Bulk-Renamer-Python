const fs = require('fs');
const path = require('path');
const replaceThis = "chn2";
const replaceWith = "chin2";
const preview = false;
const folder = __dirname;

try {
    fs.readdir(folder, (err, data) => {
        // const item = data[index];
        console.log(data);
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            console.log(item);
            let oldFile = path.join(folder, item);
            let newFile = path.join(folder, item.replaceAll(replaceThis, replaceWith));
            if (!preview) {

                fs.rename(oldFile, newFile, () => {
                    console.log("Rename sucsess!")
                });
            } else {
                if ("data/" + item !== newFile) console.log("data/" + item + " will be renamed to", newFile);
            }

        }

    })

    // console.log(data);
}
catch (err) {
    console.log(err);
}