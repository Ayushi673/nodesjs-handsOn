const fs=require('fs');
const chalk= require('chalk')

const getNotes= ()=>{
    return 'Your notes...'
}

const addNotes=(title,body)=>{
    const notes=loadNotes();
    //const duplicate=notes.filter((n)=>n.title===title); // this checks all the elements even after it is found
    const duplicateNote=notes.find((n)=>n.title===title);

    debugger

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('New Note Added!'));
    }else{
        console.log(chalk.red.inverse('Duplicate titled not can\'t be added!'));
    }
}

const saveNotes= (notes)=>{
    const dataJson=JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

const loadNotes=()=>{
    try{
        const rawData=fs.readFileSync('notes.json');
        const data=rawData.toString();
        return JSON.parse(data);
    }catch(e){
        return [];
    }
}

const removeNote=(title)=>{ 
    console.log(`${title} note has to be removed`);
    const notes= loadNotes();
    const nonMatching= notes.filter((n)=>n.title!==title);
    saveNotes(nonMatching);
    if(nonMatching.length < notes.length){
        console.log(chalk.green.inverse('Note Removed!'));
    }else{
        console.log(chalk.red.inverse('No note found!'));
    }
}

const listNotes=()=>{
    console.log(chalk.inverse('Your notes'));
    const notes=loadNotes();
    notes.forEach((n) => {
        console.log(n.title); 
    });
}

const readNote=(title)=>{
    const notes=loadNotes();
    const found= notes.find((n)=>n.title==title);
    if(found){
       console.log(chalk.inverse(found.title));
       console.log(found.body);
    }else{
        console.log(chalk.red('Not found!'));
    }
}

module.exports={
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}

/*debugging:
(1)console.log()- to quickly get a value and see what's wrong. But 
it becomes 
(2)node debugger- node's built in debugging tool which integrates with 
v8 engine and chrome browser. Not gonna pause by default, write- node inspect app.js ...
*/
