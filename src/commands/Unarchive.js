import * as u from '../Utils'

function replaceExtension(p) {
    return p.replace(".tar.gz", "").replace(".tar", "").replace(".tar.bz2", "").replace(".zip", "")

}

const ansibleString = (p) => {
p = u.isRelative(p) ? u.currentFolder + "/" + p : p;
let output = replaceExtension(p);
return `
- name: Extract ${p} into ${output}
  unarchive:
    src: ${p}
    dest: ${output}
    remote_src: yes
`
}

export function is(command) {
    return u.isCommand(command, "tar") || u.isCommand(command, "unzip")

}

export function to(command) {
    console.log(command)
    var cmdArr = u.arrayWithoutCommand(u.splitLine(command))
    // Remove -zxvf
    cmdArr = cmdArr.filter((value, index, arr) => value !== "-zxvf")
    // Join all the elements in the string
    return ansibleString(cmdArr[0])

}