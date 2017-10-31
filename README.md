Boomak — Client Application
===========================

What is This?
-------------

Simple REST API based bookmarks storage and management application. Don't expect
something big or unique here—just another Pet Project to practice my skills in
programming and web development. :-)

Launching this Project
----------------------

### Development Environment

We assume that `%PROJECT_DIR%` is where your project located.

1. Open new terminal, and run:  
`cd %PROJECT_DIR`  
`make webpack`  
This would be webpack assets watcher.  

2. Open another terminal, and run:  
`cd %PROJECT_DIR`  
`make serve`  
This would be development server which serves application main HTML file.  

3. Open another terminal, and run:  
`cd %PROJECT_DIR`  
Here you can do the actual work (use git, yarn, edit some files, etc.)  

### Production Environment

TBD:

Repositories Structure
----------------------

Repository | URL | Comment | Language
--- | --- | --- | ---
boomak-server | [https://github.com/resurtm/boomak-server](https://github.com/resurtm/boomak-server) | Server backend | Go
boomak-client _**(this repo!)**_| [https://github.com/resurtm/boomak-client](https://github.com/resurtm/boomak-client) | Web based client | JavaScript
boomak-cli | [https://github.com/resurtm/boomak-cli](https://github.com/resurtm/boomak-cli) | CLI based client | Go

License
-------

Copyright 2017 resurtm

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
