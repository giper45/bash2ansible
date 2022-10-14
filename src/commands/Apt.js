import * as u from '../Utils'

const ansibleString = (packages) => {
console.log(packages)
return `
- name: Install a list of packages
  apt:
    pkg:
    ${packages}
`
}

export function is(command) {
    return u.isCommand(command, "apt") || u.isCommand(command, "apt-get")

}

export function to(command, remotePath = null) {
    console.log(command)
    var cmdArr = u.arrayWithoutCommand(u.splitLine(command))
    // install, remove, update ...
    var option = cmdArr[0]
    if (option == "install") {
        console.log("Install mode")
        // second
        cmdArr = u.arrayWithoutCommand(cmdArr)
        var packages = u.splitLine(cmdArr.join(' '))
        console.log(packages)
        // Join all the elements in the string
        return ansibleString(packages)
    }

}