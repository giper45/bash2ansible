import * as u from '../Utils'


const ansibleString = (src, dest) => {
dest = u.convertPath(dest)

return `
- name: Tpl ${src} into ${dest}
  template:
    src: ${src}
    dest: ${dest}
`
}

export function is(command) {
    return u.isCommand(command, "template") 

}

export function to(command) {
    var cmdArr = u.arrayWithoutCommand(u.splitLine(command))
    // Remove -zxvf
    cmdArr = cmdArr.filter((value, index, arr) => value !== "-R")
    let src = cmdArr[0]
    let dest = cmdArr[1]

    // Join all the elements in the string
    return ansibleString(src, dest)

}