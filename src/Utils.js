function ansibleHomeVariable() {
    return "ansible_env.HOME"
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
    return arr[0] == expected
}
