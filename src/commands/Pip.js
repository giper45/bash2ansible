import * as u from '../Utils'

const ansibleString = (packages) => {
console.log(packages)
return `
- name: Install pip packages
  pip:
    name:
${u.arrayToOptions(packages)}
`
}

export function is(command) {
    return u.isCommand(command, "pip") 

}

export function to(command, remotePath = null) {
    console.log(command)
    var cmdArr = u.arrayWithoutCommand(u.splitLine(command))
    // install, remove, update ...
    var option = cmdArr[0]
    if (option === "install") {
        console.log("Install mode")
        // second
        cmdArr = u.arrayWithoutCommand(cmdArr)
        var packages = u.splitLine(cmdArr.join(' '))
        packages = packages.filter((value, index, arr) => value !== "-y")
        // Replace -y 
        // Join all the elements in the string
        return ansibleString(packages)
    }

}