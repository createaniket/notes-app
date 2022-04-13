const { string } = require('yargs');
const yargs = require('yargs');
const yargsParser = require('yargs-parser');
// console.log(yargs.argv);



const notes = require('./notes.js')
console.log(notes);


// for adding a note command

yargs.command({

    command : 'add',
    describe : 'for adding a note',




    builder :{


        title : {
            describe : 'Add title',
        
            demandOption: true,
            type : string,
        },

        body : {
        describe : 'removing body',
    
     demandOption: true,
         type : string,
        }


        },




    handler : function (argv) {

        // console.log("Adding a note!")

        // console.log(argv.title , argv.body)

        notes.addnote(argv.title, argv.body)


    },


})



// for Removing a note command


yargs.command( {

    command: 'remove',
    describe: 'For removing a note',

    builder :{


    title : {
        describe : 'removing title',
    
        demandOption: true,
        type : string,
    }


    // body : {
    //     describe : 'removing body',
    
    //     demandOption: true,
    //     type : string,
    // }

    },
    handler: function(argv) {

        // console.log("Removing a note " + argv.title)
        // console.log("Removing a body " + argv.body)

        notes.removeNote(argv.title)

        // console.log(argv.title , argv.body)

        
    }
})

// yargs.command( {

//     command: 'list',
//     describe:'for printing all the notes',
    
//     handller() {

//         notes.listNotes()


//     }
// })




yargs.command({


    command: 'list',
    describe: 'list the notes',
    handler() {
        notes.listNotes()
    }
})








yargs.command({


    command: 'read',
    describe: 'Read the notes',

    builder : {

        title: {   
        describe: 'Note title',
        demandOption: true,
        type: 'string'



    }

    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})






console.log(yargs.argv)









// const notes = require('./notes.js')



// handler: function(argv) {

//     notes.addNote(argv.title, argv.body)
// }