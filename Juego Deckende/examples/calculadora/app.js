// Cat age calculator 
let humanAge = 0;

for (let catAge = 1; catAge < 21; catAge++) {
    if (catAge==1) {
        humanAge=15;
    }
    else if (catAge==2) {
        humanAge=24;
    }
    else{
        humanAge = humanAge+4;
    }
    console.log("Human: "+humanAge+" | Cat: "+catAge);
}