const fs=require('fs');
const chalk= require('chalk')

const getNotes= function(){
    return 'Your notes...'
}

const addNotes=function(title,body){
    const notes=loadNotes();
    const duplicate=notes.filter(function(n){
        return n.title===title;
    })

    if(duplicate.length===0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log('New Note Added!');
    }else{
        console.log('Duplicate titled not can\'t be added!');
    }
}

const saveNotes= function(notes){
    const dataJson=JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}


const loadNotes= function(){
    try{
        const rawData=fs.readFileSync('notes.json');
        const data=rawData.toString();
        return JSON.parse(data);
    }catch(e){
        return [];
    }
}

const removeNote=function(title){ 
    console.log(`${title} note has to be removed`);
    const notes= loadNotes();
    const nonMatching= notes.filter(function(n){
        return n.title!==title;
    })
    saveNotes(nonMatching);
    if(nonMatching.length < notes.length){
        console.log(chalk.green.inverse('Note Removed!'));
    }else{
        console.log(chalk.red.inverse('No note found!'));
    }
}

module.exports={
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
}