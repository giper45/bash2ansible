import * as u from '../Utils'

const ansibleString = (path) => {
    // If the path is absolute, use the full path
    let thePath = u.convertPath(path)
    console.log(thePath)
return `
- name: mkdir ${thePath}
  file:
    path: "${thePath}"
    state: directory
    mode: '0755'
`;
}

export function is(command) {
    console.log(command)
    return u.isCommand(command, "mkdir")

}

export function to(command) {
    var cmdArr = u.arrayWithoutCommand(u.splitLine(command))
    if (cmdArr.length === 1) {
        return ansibleString(cmdArr[0])
    }
}