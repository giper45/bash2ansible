import * as u from '../Utils'

export function is(command) {
    return u.isCommand(command, "cd");

}

export function to(command) {
    let cmdArr = u.arrayWithoutCommand(u.splitLine(command))
    let currentFolder = cmdArr[0]
    console.log(u.currentFolder)
    // If it relative, move to the relative folder
    if (currentFolder)
    {
        if (u.isRelative(currentFolder)) {
            currentFolder = u.currentFolder + "/" + currentFolder
        }
        u.setCurentFolder(currentFolder)
        console.log("Update current folder to " + cmdArr[0])
    }
}