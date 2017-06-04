# CasparCG HTML Templates
Some examples and a framework to start from when developing templates for CasparCG's HTML producer.

[CasparCG HTML Producer Quick Reference](http://blog.evilgeniustech.com/casparcg-html-producer-basics/)

**Note: This project is a work in progress. Some templates may be unfinished or unstable. If you encounter broken templates, bugs, or other issues, please make a GitHub issue so that we know about it. And of course, pull requests welcome.**

## Getting Started

It's important to note that while some of these templates can be used as finished products, this repo is more intended as a starting point for you to develop your own templates. Every creative team will have different needs, but using simple JavaScript/HTML/CSS that is familiar to many creative/web developer types, you can customize the templates to your heart's content.

That said, there are a few things to consider:

- **Environment**: Development environment is a big deal here. I personally use Brackets.io as an editor, although the editor is up to you. However, CasparCG is _always_ going to display the template at the same resolution, unlike a webpage which must scale. In order to make sure you get exactly the spacing/sizing you want, you should use the developer tools in your web browser. For instance, when using Brackets' Live Preview in Google Chrome, I can press F12 to open developer tools, and then open the "Device Toolbar." This will let me set a specific resolution I want to preview the webpage on, so set this to the resolution of your CasparCG server.

- **Internet Access**: You want to rely on the Internet as little as possible to do the job, but often things like fetching weather or updated scoring information must use the Internet. In this case, you should make sure your CasparCG server has reliable Internet access, and take precautions to ensure your templates behave smoothly in the event of a bad connection.

- **CasparCG Version**: The features necessary for these templates are **not working** in CasparCG 2.0.7 (the mainstream version at this time). I recommend using CasparCG Server 2.1.0 Beta #1, and if you experience persistent problems you might consider using a nightly build of the client as well. In my testing, the absolutely essential "Send as JSON" feature doesn't work at all on CasparCG Server 2.0.7, meaning your JavaScript program gets XML data, which is difficult to handle. Upgrading to a beta version of CasparCG Server solved it for me.

## Installation

To "install" these templates, simply clone this repository and drag the contents of the ``templates`` folder into the ``templates`` folder on your CasparCG server. Then you can open the templates in your favorite web development program, such as Brackets.io.

## Developing Templates

Some basic JavaScript/HTML/CSS knowledge is required to use these tools. If you want to learn, Codecademy is a great place to get an introduction, and W3Schools also provides excellent resources. And of course, some general computer knowledge is required as well.

Bottom line: be sure to read the comments in the files, they are there to help. And it would also be helpful for you to read [this blog post](http://blog.evilgeniustech.com/casparcg-html-producer-basics/), where I explain what all the JavaScript functions CasparCG calls are for.
