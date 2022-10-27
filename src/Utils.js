/**
 * Utils module
 * @module Utils
 */


// function ansibleHomeVariable() {
//     return "ansible_env.HOME"
// }
/**
 * Generate tabs (consider two space tabs)
 * @param  {int} noTabs : the number of tags
 */

/**
 * @type {string} The current folder
 */
export let currentFolder = "{{ansible_env.HOME}}"

/** 
 *  Returns the user home
 *  @returns {string}  The user home
 */ 
export function userHome() {
    return "{{ansible_env.HOME}}"
}
/** 
 * Returns the filename from the url, e.g. https://site/file.json => file.json
 * @param  {string} url The url
 * @returns {string} The filename
 */
export function getFilenameFromUrl(url) {
    return url.split('/').pop()

}
/** 
 * Set the current folder for the commands. 
 * When the user send cd, it is converted
 * @param  {string} f The filename
 */
export function setCurentFolder(f) {
    currentFolder = f;
}
/**
 * Checks fi the proposed path is relative
 * @param  {string} p The proposed path
 */
export function isRelative(p) {
    return  !p.startsWith("/")
}

/**
 * Generates a set of path
 * @param  {string} noTabs The number of paths 
 * @returns {string} the string composed of a set of paths
 */
export function genTab(noTabs) {
    let t = "";
    for (let i = 0; i < noTabs; i++)
        t = t + "    ";
    return t;
}

/** 
 * Returns an array without empty values
 * @param  {string} arr The array
 * @returns {Array} an array without empty values
 */
export function noEmpty(arr) {
    return arr.filter(function(e){return e}); 
}
/**
 * Split a line into an array of strings
 * @param  {string} command the command
 * @returns {Array} The array of commands
 */
export function splitLine(command) {
    return command.trim().split(/\s+/)
}
/**
 * Split a bash string
 * splitBash("#!/bin/bash\ncd ~/path;\n mkdir test") => ["cd ~/path", "mkdir test"]
 * @param  {string} text The bash string
 * @returns {Array} The array of string
 */
export function splitBash(text) {
    let trimmed =  text.trim().split(/\n+|;+/)
    trimmed = trimmed.map(e => e.trim())
    trimmed = noEmpty(trimmed)
    if(trimmed[0].startsWith("#!/")) {
        return arrayWithoutCommand(trimmed);
    }
    return trimmed

}

/**   Return the array without the first element
 * @param  {Array} arr The array
 * @returns {Array} The array without the first element
 */
export function arrayWithoutCommand(arr) {
    return arr.slice(1)
}
// function AnsibleMkdir() {
//     - name: Create a directory if it does not exist
//   ansible.builtin.file:
//     path: /etc/some_directory
//     state: directory
//     mode: '0755'

// }

// COMMANDS
export function isCommand(command, expected) {
    let arr = splitLine(command)
    return arr[0] === expected
}

export function arrayToOptions(arr) {
    let tabs = genTab(1)
    let ret = ""
    arr.forEach(a => {
        ret +=  tabs + "- " + a + "\n"
        
    })
    return ret
}
/** 
 * Convert an option to the relative ansible command
 * @param  {str} unixOption: the unix options (e.g. --system)
 * @param  {str} ansibleOption: the ansible option (e.g. system=yes)
 * @param  {str} value="" the expected value, when is empty do not consider the --option=value condition
 * @param  {str} ansibleValue="yes" 
 */
export function bash2AnsibleOption(unixOption, ansibleOption, value = "", ansibleValue = "yes") { 

}

export function convertPath(p) {
    if (!p)
        return currentFolder;
    return isRelative(p) ? currentFolder + "/" + p : p;
}


