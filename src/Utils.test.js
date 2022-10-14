import Add, { splitLine, arrayWithoutCommand, splitBash} from './Utils'
import * as mkdir from './commands/Echo'
var ansibleMkdir = `
- name: mkdir test
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