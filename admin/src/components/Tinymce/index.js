import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Editor } from '@tinymce/tinymce-react';

const TinyEditor = ({ onChange, name, value }) => {

  return (
  
    <>
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
    </>
    
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default TinyEditor;
