import * as u from '../Utils'


const ansibleString = (src, dest) => {
src = u.convertPath(src)
dest = u.convertPath(dest)

return `
- name: Copy ${src} into ${dest}
  copy:
    src: ${src}
    dest: ${dest}
    remote_src: yes
`
}

export function is(command) {
    return u.isCommand(command, "cp") 

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