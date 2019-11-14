const cp = require('child_process');

module.exports = class Mixer {
    constructor(options = {}) {
        this.path = options.path || '/usr/bin/amixer';
        this.device = options.device || 'equal';
    }

    sset(name, left, right) {
        return this.amixer(['-D', this.device, 'sset', `"${name}"`, `${left},${right}`]);
    }

    scontents() {
        return this.amixer(['-D', this.device, 'scontents']).then(res => this.parseSimpleControls(res));
    }

    amixer(params) {
        return new Promise((resolve, reject) => {
            let stdout = '';
            let stderr = '';

            const amixer = cp.spawn(this.path, params);

            amixer.stdout.on('data', data => {
                stdout += data.toString();
            });

            amixer.stderr.on('data', data => {
                stderr += data.toString();
            });

            amixer.on('close', code => {
                if (code === 0) {
                    resolve(stdout);
                } else {
                    reject(new Error(stderr));
                }
            });
        });
    }

    parseSimpleControls(scontents) {
        return new Promise(resolve => {
            const data = [];
            let currentControl = null;
            scontents.split('\n').forEach(line => {
                const matchControl = line.match(/^([^']+) '([^']+)',(\d+)$/);
                if (matchControl) {
                    if (currentControl) {
                        data.push(currentControl);
                    }

                    const [, type, name, index] = matchControl;
                    currentControl = {type, name, index};

                    return;
                }

                const matchValue = line.match(/^ {2}([^:]+): ?(.*)$/);
                if (matchValue) {
                    const [, key, val] = matchValue;
                    currentControl[key] = val;
                }
            });
            data.push(currentControl);
            data.map(m => {
                let match = m.name.match(/(\d{2})\. (.*)/);
                if (match) {
                    const [, num, name] = match;
                    m.shortname = name;
                    m.num = Number(num);
                }

                match = m['Front Left'].match(/^Playback (\d+) \[(\d+)%]/);
                if (match) {
                    m.left = Number(match[2]);
                }

                match = m['Front Right'].match(/^Playback (\d+) \[(\d+)%]/);
                if (match) {
                    m.right = Number(match[2]);
                }

                return m;
            });

            resolve(data);
        });
    }
};
