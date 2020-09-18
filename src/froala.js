import React from "react";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/css/third_party/image_tui.min.css";
import "froala-editor/js/third_party/image_tui.min.js";
import FroalaEditorComponent from "react-froala-wysiwyg";
import FroalaEditor from "froala-editor";


window.FroalaEditor = require("froala-editor");
require("@wiris/mathtype-froala3");

FroalaEditor.DefineIcon("insert", { NAME: "plus", SVG_KEY: "add" });
FroalaEditor.RegisterCommand("insert", {
  title: "Insert HTML",
  focus: true,
  undo: true,
  refreshAfterCallback: true,
  callback: function () {
    this.html.insert("My New HTML");
  }
});

var editor;

class Froala extends React.Component {
    constructor(){
        super()
        this.state={
            body:'Hi there'
        }
    }
    render(){
    const config={
            toolbarButtons: {
                'moreText': {
                    'buttons': ['bold', 'italic','underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting']
                },
                'moreParagraph': {
                    'buttons': ['wirisEditor','wirisChemistry', 'alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote']
                },
                'moreRich': {
                    'buttons': ['insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertFile', 'insertHR']
                },
                'moreMisc': {
                    'buttons': ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'selectAll', 'html', 'wirisMathEditor'],
                    'align': 'right',
                    'buttonsVisible': 5
                },
            },

            events: {
              initialized: function () {
                editor = this;
              }
            }
          }
        return (
            <div>
            
                <FroalaEditorComponent model={this.state.body} config={config}
              
                  
                />
           
            </div>
          );

    }
  
}
export default Froala