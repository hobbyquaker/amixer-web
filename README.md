# amixer-web

[![npm version](https://badge.fury.io/js/amixer-web.svg)](https://badge.fury.io/js/amixer-web) 
[![dependencies Status](https://david-dm.org/hobbyquaker/amixer-web/status.svg)](https://david-dm.org/hobbyquaker/amixer-web)
[![Build Status](https://travis-ci.org/hobbyquaker/amixer-web.svg?branch=master)](https://travis-ci.org/hobbyquaker/amixer-web)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![License][mit-badge]][mit-url]

[mit-badge]: https://img.shields.io/badge/License-MIT-blue.svg?style=flat
[mit-url]: LICENSE

> alsa mixer web frontend

## Install

`$ sudo npm install -g amixer-web`

## Usage

```
Usage: amixer-web [options]

Options:
  --version     Show version number                                    [boolean]
  --help        Show help                                              [boolean]
  -a, --path    amixer path                         [default: "/usr/bin/amixer"]
  -p, --port    webserver port                                   [default: 3000]
  -D, --device  amixer device                                 [default: "equal"]

```

![](screenshot.png)

## License

Copyright 2019 Sebastian Raff

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
