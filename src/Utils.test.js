import Add, { splitLine, arrayWithoutCommand, splitBash, isRelative, getFilenameFromUrl} from './Utils'
import * as mkdir from './commands/Mkdir'
var ansibleMkdir = `
- name: mkdir {{ansible_env.HOME}}/test
  file:
    path: "{{ansible_env.HOME}}/test"
    state: directory
    mode: '0755'
`;




test('split', () => {
    expect(splitLine("mkdir test  newline")).toStrictEqual(["mkdir", "test", "newline"])
});

test('splitBash', () => {
    expect(splitBash("#!/bin/bash\ncd ~/path;\n mkdir test")).toStrictEqual(["cd ~/path", "mkdir test"])
});

test('arr without first', () => {
    expect(arrayWithoutCommand(["a", "be", "three"])).toStrictEqual(["be", "three"])
});

test('isMkdir', () => {
    expect(mkdir.is('mkdir testA')).toBe(true)
    expect(mkdir.is('another t')).toBe(false)
    expect(mkdir.is('no mkdir')).toBe(false)
});

test('mkdir', () => {
    expect(mkdir.to("mkdir test")).toBe(ansibleMkdir)
});


test('path relative', () => {
    expect(isRelative("test")).toBe(true)
    expect(isRelative("/test")).toBe(false)
})

test('filename from url', () => {
expect(getFilenameFromUrl("https://github.com/containerd/nerdctl/releases/download/v0.23.0/nerdctl-full-0.23.0-linux-amd64.tar.gz")).toBe("nerdctl-full-0.23.0-linux-amd64.tar.gz")
})