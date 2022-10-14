// function ansibleHomeVariable() {
//     return "ansible_env.HOME"
// }
/**
 * Generate tabs (consider two space tabs)
 * @param  {int} noTabs : the number of tags
 */

// Default currentFolder
export let currentFolder = "{{ansible_env.HOME}}"

export function getFilenameFromUrl(url) {
    return url.split('/').pop()

}

export function setCurentFolder(f) {
    currentFolder = f;
}

export function isRelative(p) {
    return  !p.startsWith("/")
}


export function genTab(noTabs) {
    let t = "";
    for (let i = 0; i < noTabs; i++)
        t = t + "    ";
    return t;
}


export function noEmpty(arr) {
    return arr.filter(function(e){return e}); 
}

export function splitLine(command) {
    return command.trim().split(/\s+/)
}

export function splitBash(text) {
    let trimmed =  text.trim().split(/\n+|;+/)
    trimmed = trimmed.map(e => e.trim())
    trimmed = noEmpty(trimmed)
    if(trimmed[0].startsWith("#!/")) {
        return arrayWithoutCommand(trimmed);
    }
    return trimmed

}

// Return the array without the first element
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
