import * as mkdir from './Mkdir'
import * as u from '../Utils'


/**
 * parse a single command.
 * This function detects the parsed line and find the related module to convert the script in command.
 * @param  {string} command : the command to parse
 * @param  {string} params=null : the possible params for the command
 */
export function parse(command, params = null) {
    let toCmd = null;
    toCmd = mkdir.is(command) ? mkdir.to : null;
    if  (toCmd) {
        return toCmd(command, params)
    } else {
        console.log("Command not found!")
        return ""
    }
}

/**
 * Parse all the lines of a bash code
 * @param  {string} bashCode
 * 
 * @returns {string} an Ansible string
 */
export function parseLines(bashCode) {
    let ansibleString = ""
    let bashCommands = u.splitBash(bashCode)
    bashCommands.forEach(command => {
        let p = parse(command)
        if (p) 
            ansibleString += p + "\n"
    })
    return ansibleString
}