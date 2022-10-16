import * as u from '../Utils'

const ansibleString = (url, theFile = null) => {
// Take the file from the input or use the filename
theFile = theFile ? theFile : u.getFilenameFromUrl(url)
// If the path is relative, append the current folder
theFile = u.isRelative(theFile) ? u.currentFolder + "/" + theFile : theFile
return `
- name: Download ${theFile}
  get_url:
    url: ${url}
    dest: ${theFile}
`
}

export function is(command) {
    return u.isCommand(command, "wget") 

}

export function to(command) {
    console.log(command)
    var cmdArr = u.arrayWithoutCommand(u.splitLine(command))
    // install, remove, update ...
    var url = cmdArr[0]
    return ansibleString(url)
}