<h1 align="center">Strapi Plugin Self-Hosted TinyMCE</h1>

<p align="center">Replaces the default Strapi WYSIWYG editor with a self-hosted build of the TinyMCE editor.</p>

Image goes here

## 👋 Introduction

* [Features](#features)
* [Installation](#installation)
* [Configuration](#configuration)
* [Requirements](#requirements)

## <a id="features"></a>✨ Key features

* **Self-Hosted (No API Key Needed):** Speedy native server loading speeds without API dependence.
* **Autolink:** Create hyperlinks automatically when a user inputs a valid and complete URL.
* **Autoresize:** Resize the editor automatically to the content inside it, and prevent the editor from expanding infinitely.
* **Code:** Add a toolbar button that allows a user to edit the HTML code hidden by the WYSIWYG view.
* **Code sample:** Insert and embed syntax color highlighted code snippets into the editable area.


And much more ! [List of all features](https://www.tiny.cloud/tinymce/features/).

## <a id="installation"></a>🔧 Installation

Inside your Strapi app, add the package:

With `npm`:
```bash
npm install @sharpetronics/strapi-plugin-tinymce-editor
```
With `yarn`:
```bash
yarn add @sharpetronics/strapi-plugin-tinymce-editor
```

In `config/plugins.js` file add:
```js
tinymce:{
    enabled:true
};
```

You will also have to update strapi::security middleware in your middlewares.js file in config folder.
If you didn't update this file yet, then replace "strapi::security" with following code (object)
```js
//middlewares.js

   {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,  
        directives: {
          "script-src": ["'self'", "https:"],
          "default-src": ["*.youtube.com", "*.vimeo.com", "rumble.com"],
          "connect-src": ["'self'", "blob:", "*.strapi.io", "*.github.com",],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
          ],
          "style-src": [
            "'self'",
            "'unsafe-inline'",
          ],
          "font-src": ["'self'"],
        },
        upgradeInsecureRequests: null,
      },
    },
  },
```

Download tinymce_self-hosted package and extract the /tinymce/js/ into your Strapi /public/.

https://www.tiny.cloud/get-tiny/self-hosted/

You should now have a uploads directory and a tinymce folder. 

Notice: the public/tinymce directory path should reflect the following:

```
/public/tinymce/
	-themes
	-skins
	...
```

Then run build:
```bash
yarn build && yarn develop
```

## <a id="configuration"></a>⚙️ Custom Configuration
Currently, this is work-in-progress (WIP). The default configuration works, but customizing this hasn't been added yet.

Learn more about configuration from [official documentation](https://www.tiny.cloud/docs/tinymce/6/).

**The Default Configuration:**
```js
// TinyMCE Default src/plugins/strapi-plugin-tinymce-editor/admin/src/components/Tinymce/index.js (WIP)

...
      <Editor
        tinymceScriptSrc={'/tinymce/tinymce.min.js'} // the root of the Strapi project from the public directory.
	value={value}
	tagName={name}
	onEditorChange={(editorContent) => {
	onChange({ target: { name, value: editorContent } });
	}}
	outputFormat="html"
	
        init={{
          height: 900,
          selector: 'textarea',
          skin: 'oxide',
          content_css: 'default',
          menubar: false,
          promotion: false,
	  convert_urls: false,
	  relative_urls : true,
	  remove_script_host : true,
	  toolbar_mode: 'wrap',
	  
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'emoticons', 'image', 'charmap',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'codesample', 'preview', 'help', 'wordcount'
          ],
          toolbar: 'fullscreen | preview code | undo redo | blocks | ' +
            'bold italic underline blockquote | ' +
            'image media link codesample | ' +
            'bullist numlist | table',
          content_style: 'body { font-family:Ubuntu,Arial,sans-serif; font-size:14px }'
        }}
      />
...

```

## <a id="requirements"></a>⚠️ Requirements
Strapi **v4.x.x+**

Node **14 - 18**

Yarn **v3.x.x**

Tested on Strapi **v4.9.2**

