const yargs = require('yargs')
const notes= require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'Adding',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removing',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing',
    handler(){
        console.log('Listing out all notes')
    }
})

yargs.command({
    command:'read',
    describe:'Reading',
    handler(){
        console.log('Reading a note');
    }
})

yargs.parse()


//console.log(yargs.argv)
/*
const chalk= require('chalk')

console.log(chalk.green('Success!'))
console.log(chalk.green.inverse('Success!'))
console.log(chalk.green.bold('Success!'))


const validator= require('validator')

const getNotes = require('./notes.js');
const mynotes= getNotes();
console.log(mynotes);

console.log(validator.isEmail('ayushi@gmail.com'))
console.log(validator.isURL('https://www.hackerrank.com/dashboard'))

const add = require('./utils.js')

const name='Ayu'
console.log(name)

const sum= add(4,-2)
console.log(sum)


const fs= require('fs') //load in core-node module

//fs.writeFileSync('notes.txt','Ayushi-File created by Node.js! ')
fs.appendFileSync('notes.txt','Appended the file')

*/