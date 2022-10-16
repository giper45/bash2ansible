import * as cd from './Cd'
import * as echo from './Echo'
import * as apt from './Apt'
import * as mkdir from './Mkdir'
import * as wget from './Wget'
import * as u from '../Utils'
import * as unarchive from './Unarchive'
import * as pip from './Pip'
import * as cp from './Copy'
import * as template from './Template'
import * as link from './Link'
import * as alias from './Alias'
import * as git from './Git'
import * as find from './Find'

/**
 * parse a single command.
 * This function detects the parsed line and find the related module to convert the script in command.
 * @param  {string} command : the command to parse
 * @param  {string} params=null : the possible params for the command
 */
export function parse(command, params = null) {
    let toCmd = null;
    toCmd = mkdir.is(command) ? mkdir.to : null;
    if (!toCmd)
        toCmd = echo.is(command) ? echo.to : null;
    if (!toCmd)
        toCmd = apt.is(command) ? apt.to : null;
    if (!toCmd)
        toCmd = cd.is(command) ? cd.to : null;
    if (!toCmd)
        toCmd = wget.is(command) ? wget.to : null;
    if (!toCmd)
        toCmd = unarchive.is(command) ? unarchive.to : null;
    if (!toCmd)
        toCmd = pip.is(command) ? pip.to : null;
    if (!toCmd)
        toCmd = cp.is(command) ? cp.to : null;
    if (!toCmd)
        toCmd = template.is(command) ? template.to : null;
    if (!toCmd)
        toCmd = link.is(command) ? link.to : null;
    if (!toCmd)
        toCmd = alias.is(command) ? alias.to : null;
    if (!toCmd)
        toCmd = git.is(command) ? git.to : null;
    if (!toCmd)
        toCmd = find.is(command) ? find.to : null;



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