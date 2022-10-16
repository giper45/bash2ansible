import * as u from '../Utils'

const ansibleString = (command) => {
return `
- name: ${command}
  shell: ${command}
  ignore_errors: yes
  changed_when: false
  register: output_shell
`
}

export function is(command) {
    return u.isCommand(command, "/bin/bash") 

}

export function to(command) {
    return ansibleString(command)
}