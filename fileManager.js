// CommonJS - Module

import fs from "fs";
import path from "path";

function createDirectory(dirPath) {
    // Retorna uma Promise que resolve quando o arquivo se cria
    return new Promise((resolve, reject) => {
        fs.mkdir(dirPath, {recursive: true}, (err) => {
            if(err) {
                reject(err) // Rejeita a Promise em caso de erro
            } else {
                resolve(`Directory '${dirPath}' created successfully`) // Resolve a Promise indicando sucesso
            }   
        })
    })
}

function createFile(filePath, content = '') {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, `utf8`, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`File '${filePath}' created successfully`)
            }
        });
    });
}


function listFiles(dirPath) {
    // Retorna uma Promise que resolve com a lista de arquivos
    return new Promise((resolve, reject) => {
        fs.readdir(dirPath, (err, files) => {
            if (err) {
                reject(err); // Rejeita a Promise em caso de erro
            } else {
                resolve(files); // Resolve a Promise com a lista de arquivos
            }
        });
    });
}

function readFile(filePath) {
    // Retorna uma Promise que resolve com o conteudo do arquivo
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err); // Rejeita a Promise em caso de erro
            } else {
                resolve(data); // Resolve a Promise com o conteudo do arquivo
            }
        });
    });
}

function writeFile(filePath, content) {
    // Retorna uma Promise que resolve quando o arquivo for escrito
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) => {
            if (err) {
                reject(err); // Rejeita a Promise em caso de erro
            } else {
                resolve('File written successfully'); // Resolve a Promise inidicando sucesso
            }
        });
    });
}

function deleteFile(filePath) {
    // Retorna uma Promise que resolve quando o arquivo for deletado
    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if (err) {
                reject(err); // Rejeita a Promise em caso de erro
            } else {
                resolve('File deleted successfully'); // Resolve a Promise indicando sucesso
            }
        });
    });
}
export default {
    createDirectory, 
    createFile, 
    listFiles, 
    readFile, 
    writeFile, 
    deleteFile
};