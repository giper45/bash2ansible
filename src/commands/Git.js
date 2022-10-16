import * as u from '../Utils'


const cloneAnsibleString = (url, dest = null) => {
dest = u.convertPath(dest)

return `
- name: Git checkout
  git:
    repo: ${url}
    dest: ${dest}
`
}

export function is(command) {
    return u.isCommand(command, "git") 

}

export function to(command) {
    var cmdArr = u.arrayWithoutCommand(u.splitLine(command))
    // Remove -zxvf
    // cmdArr = cmdArr.filter((value, index, arr) => value !== "-R")
    let option = cmdArr[0]
    if (option === "clone") {
        let url = cmdArr[1]
        let dest = null;
        if (cmdArr.length > 2)
            dest = cmdArr[2]
        return cloneAnsibleString(url, dest)
    }

    // Join all the elements in the string
    return ""

}