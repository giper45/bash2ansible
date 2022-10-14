import * as u from '../Utils'

const ansibleString = (path, remotePath = null) => {
    const basePath = remotePath ? remotePath : "{{ansible_env.HOME}}";
return `
- name: mkdir ${basePath}/${path}
  file:
    path: "${basePath}/${path}"
    state: directory
    mode: '0755'
`;
}

export function is(command) {
    console.log(command)
    return u.isCommand(command, "mkdir")

}

export function to(command, remotePath = null) {
    var cmdArr = u.arrayWithoutCommand(u.splitLine(command))
    if (cmdArr.length === 1) {
        return ansibleString(cmdArr[0], remotePath)
    }
}