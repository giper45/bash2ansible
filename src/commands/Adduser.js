import * as u from '../Utils'


const ansibleString = (user, system = "no") => {
return `
- name: Add user
  user:
    name: ${user}
    state: present
    shell: /bin/bash
    system: ${system}
    createhome: yes
`
}

export function is(command) {
    return u.isCommand(command, "useradd") || u.isCommand(command, "adduser")

}

export function to(command, remotePath = null) {
    var cmdArr = u.arrayWithoutCommand(u.splitLine(command))
    // install, remove, update ...
    var name = cmdArr[0]
    return ansibleString(name)
}