import * as u from '../Utils'

const ansibleString = (string) => {
return `
- name: echo ${string}
  debug:
    msg: ${string}
`;
}

export function is(command) {
    return u.isCommand(command, "echo")

}

export function to(command, remotePath = null) {
    var cmdArr = u.arrayWithoutCommand(u.splitLine(command))
    // Join all the elements in the string
    return ansibleString(cmdArr.join(' '))
}