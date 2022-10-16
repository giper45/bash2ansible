import * as u from '../Utils'


const ansibleString = (pattern, basePath) => {
return `
- name: find ${pattern} in ${basePath}
  ansible.builtin.find:
    paths: ${basePath}
    file_type: file
    #file_type: directory
    use_regex: yes
    recurse: yes
    patterns:
      - '^${pattern}$'
    register: output
`
}

export function is(command) {
    return u.isCommand(command, "find") 

}

export function to(command) {
    var cmdArr = u.arrayWithoutCommand(u.splitLine(command))
    // Remove -zxvf
    cmdArr = cmdArr.filter((value, index, arr) => value !== "-name")
    let base = cmdArr[0]
    let pattern = cmdArr[1]

    // Join all the elements in the string
    return ansibleString(pattern, base)

}