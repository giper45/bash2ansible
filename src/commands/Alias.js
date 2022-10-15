import * as u from '../Utils'


const ansibleString = (alias) => {
return `
- name: Add serve alias for foo user
  lineinfile:
    path="${u.userHome()}/.bashrc"
    line="${alias}"
    regexp='^${alias}$'
    state=present
    insertafter=EOF
    create=True
- name: Source .bashrc
  shell: "source ${u.userHome()}/.bashrc"
  args:
    executable: /bin/bash
`

}

export function is(command) {
    return u.isCommand(command, "alias") 

}

export function to(command) {
    // var cmdArr = u.arrayWithoutCommand(u.splitLine(command))
    // // Remove -zxvf
    // cmdArr = cmdArr.filter((value, index, arr) => value !== "-R")
    // let src = cmdArr[0]
    // let dest = cmdArr[1]

    // Join all the elements in the string
    return ansibleString(command)

}