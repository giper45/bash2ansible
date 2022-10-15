import * as u from '../Utils'


const ansibleString = (src, link) => {
src = u.convertPath(src)
link = u.convertPath(link)

return `
- name: Link ${src} into ${link}
  file:
    src: ${src}
    dest: ${link}
    state: link
`
}

export function is(command) {
    return u.isCommand(command, "ln") 

}

export function to(command) {
    var cmdArr = u.arrayWithoutCommand(u.splitLine(command))
    // Remove -zxvf
    cmdArr = cmdArr.filter((value, index, arr) => value !== "-s")
    let src = cmdArr[0]
    let link = cmdArr[1]

    // Join all the elements in the string
    return ansibleString(src, link)

}