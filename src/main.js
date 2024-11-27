import pdfMake from "pdfmake/build/pdfmake.js"
import fs from "fs"

const fonts = {
    Arimo: {
        normal: './fonts/Arimo/Arimo-Regular.ttf',
        bold: './fonts/Arimo/Arimo-Bold.ttf',
        italics: './fonts/Arimo/Arimo-Italic.ttf',
        bolditalics: './fonts/Arimo/Arimo-BoldItalic.ttf',
    },
    Roboto: {
        normal: './fonts/Roboto/Roboto-Regular.ttf',
        bold: './fonts/Roboto/Roboto-Bold.ttf',
        italics: './fonts/Roboto/Roboto-Italic.ttf',
        bolditalics: './fonts/Roboto/Roboto-BoldItalic.ttf',
    },
};

const tableLayouts = {};
const data = {
    content: [{
            text: "Answered on 26 Nov 2024"
        },
    ],
    defaultStyle: {
        fontSize: 40,
        font: "Arimo"
    }
};

const readFileContentAsBase64 = (s) => {
    const content = fs.readFileSync(s);
    return content.toString("base64");
}

const vfs = (files) => {
    const result = files.map(f => {
        return [f, readFileContentAsBase64(f)]
    })

    return Object.fromEntries(result)
}

async function createPdf() {
    const vfsResult = vfs(Object.values(fonts.Arimo))
    const result = pdfMake.createPdf(
        data,
        tableLayouts,
        fonts,
        vfsResult
    );
    return result;
}

createPdf().then((pdf) => pdf.getBuffer((buffer) => fs.writeFileSync("./arimo-test.pdf", buffer)));