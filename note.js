var fs= require('fs');

const add=(symptom, dia)=>{
    try{
        var notes=[];
        var note={symptom, dia};
        if(fs.existsSync('notes-data.json'))
            notes= JSON.parse(fs.readFileSync('notes-data.json','utf-8'));
        var duplicateNotes = notes.filter((note)=>{
            return note.symptom == symptom
        }); // it will be an arry of matching value
        if(duplicateNotes.length==0)
        {
            notes.push(note);
            fs.writeFileSync('notes-data.json', JSON.stringify(notes));
        }
    }
    catch(e){

    }
    
}