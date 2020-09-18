import React from 'react'
import Axios from 'axios'
import htmlDocx from 'html-docx-js/dist/html-docx'
import {saveAs} from 'file-saver'
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/css/third_party/image_tui.min.css";
import "froala-editor/js/third_party/image_tui.min.js";
import FroalaEditorComponent from "react-froala-wysiwyg";
import FroalaEditor from "froala-editor";
import 'font-awesome/css/font-awesome.min.css'
import './Style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faCoffee } from '@fortawesome/free-solid-svg-icons'

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

var editor
class Editor2 extends React.Component{
    constructor(){
        super()
        this.state={
            isEditor:false,
            isEditor1:false,
            body:'',
            selectedFile:null,
            isStatus:false,
            isFileName:false,
            isRight:false,
            isToggle:false
        
        }
    }
    handleFile=(e)=>{

    this.setState({
        selectedFile:e.target.files[0]
    })
    }
    handleClick=()=>{
        this.setState((prevState)=>{
            return{
                isEditor:!prevState.isEditor
            }
        })
        
     const data=new FormData()
     data.append('file',this.state.selectedFile)
     Axios.post('http://localhost:3099/api/upload',data)
     .then((response)=>{
        const body=response.data
        this.setState({body})
     })
     .catch((err)=>{
         console.log(err)
     })
     this.setState((prevState)=>{
         return{
             isFileName : ! prevState.isFileName
         }
     })
    }
  
        handleChange=(content)=>{
           this.setState({body:content}) 
        
            
              
        }
   
        handleRefresh=()=>{
            this.setState((prevState)=>{
                return{
                    isStatus:!prevState.isStatus
                }
            }) 
        }

       handleDocx=()=>{

    
           var charset=''
           var content= this.state.body.replaceAll('<table','<table border="1"')
          
           var convert=htmlDocx.asBlob(content,{orientation:'landscape',margins:{top:720}})
           saveAs(convert,'amit.docx')
           
      
    }

     handleRefresh=()=>{
         this.setState({body:this.state.body})
     }
     onModelChange=(content)=>{
        this.setState({body:content})
    }

   openSideMenu=()=>{
       this.setState((prevState)=>{
           return{
               isEditor : ! prevState.isEditor
           }
       })
       this.setState((prevState)=>{
           return{
               isEditor1 : ! prevState.isEditor1 
           }
       })
   }
   closeSideMenu=()=>{
       this.setState((prevState)=>{
           return{
               isEditor1 : ! prevState.isEditor1
           }
       })
       this.setState((prevState)=>{
           return{
               isEditor : ! prevState.isEditor
           }
       })
   }
   openSideMenu1=()=>{
       this.setState((prevState)=>{
           return{
               isEditor : ! prevState.isEditor
           }
       })
       this.setState((prevState)=>{
           return{
               isRight : ! prevState.isRight
           }
       })
   }
   closeSideMenu1=()=>{
      this.setState((prevState)=>{
          return{
              isRight : ! prevState.isRight
          }
      })
      this.setState((prevState)=>{
          return{
              isEditor : !prevState . isEditor
          }
      })
    
   }
   openNavbar=()=>{
       document.getElementById('mySidebar').style.width = "250px"
       document.getElementById('main').style.marginLeft="250px"
       this.setState((prevState)=>{
           return{
               isToggle : !prevState.isToggle
           }
       })
   }
   closeNav=()=>{
       document.getElementById('mySidebar').style.width = "0"
       document.getElementById('main').style.marginLeft= "0"
   }
    render(){
        const config = {
            placeholderText: 'Edit Your Content Here!',
            charCounterCount: false,
            toolbarButtons: {
                'moreText': {
                    'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting']
                },
                'moreParagraph': {
                    'buttons': ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote']
                },
                'moreRich': {
                    'buttons': ['wirisEditor', 'wirisChemistry','insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'html','embedly', 'insertFile', 'insertHR'],
                    buttonsVisible:"12"
                },
              
            },
        }
        const config1={
            placeholderText: 'Edit Your Content Here!',
            charCounterCount: false,
            toolbarButtons:{
            'moreMisc': {
                'buttons': ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'selectAll', 'html', 'wirisMathEditor'],
                'align': 'right',
                'buttonsVisible': 2
            },
        }

        }
        return(
            <div >
              
               <section className="container4">
                   
                   <div  className="div6">
                       <div id="mySidebar" className="sidebar">
                     <div id="containers">
                         <div id="lefts">

                         </div>
                         <div id="rights" className="cut">
                             <a onClick={this.closeNav} style={{transition:'0.5s'}} href="#"><i className="fa fa-times"></i></a>

                         </div>
                         <div id="centers">
                             <p className="h10">Nimbus</p>

                         </div>

                     </div>
                     <hr/>
                   
                     </div>
                   
                           
             
                  
                   </div>

                   
                   
                   <div  id="main" className="div7">
              

               <div >
                   
               
                <div className="top">
                    <div className="float">
                <button className="openbtn" onClick={this.openNavbar}><i className="fa fa-bars"></i></button>
                </div>
                <div id="container" >
                    
                    
                   
                <div className="open" id="left" >
                   
                   
             

                    <section className="container3">

                 
                       
                        <div className="div3">
                        
               <input type="file" className="button4" name="file" style={{backgroundColor:'#0BB7A7'}} onChange={this.handleFile}/>
                </div>
                <div className="div4">
                <button className="button3" onClick={this.handleClick}><i style={{color:'white'}} className="fa fa-clone" ></i></button> 
                </div>
                </section>
                </div>
                <div id="right">
                    <div className="last">
               { this.state.isFileName &&  <p className="button2" onClick={this.handleDocx}><i className='fa fa-file'> - Export as .Docx</i></p> }
               </div>

                </div>
                <div id="center">
                    <div className="middle">
                { this.state.isFileName &&    <p className="h3">{this.state.selectedFile.name}</p> } </div>

                </div>
                </div> 
                </div>
                <section className="container2">
                    
                    
               {
                   this.state.isEditor && (
                    <div className="div1">
                  
                        

                    
                       
                        <div  className="inside">
     <FroalaEditorComponent config={config} model={this.state.body}  onModelChange={this.handleChange}/>
    
    
                           
                            </div>
                   
                
            
                </div>
                       
                   )
               }
              
              <div className="container15">
                  <div className="border">

                  </div>
                  {
                      this.state.isEditor && <div onClick={this.closeSideMenu}>
                          <div className="border1">
                              <span className="background">
                    
                      <i className="fa fa-long-arrow-left  fa-lg fa-border"  style={{color:'#0BB7A7'}}></i>
                      </span>
                   </div>
                 
                   
    
                      </div>
                  }
                  <div className="border10 ">

                  </div>
                  
                 
                  {
                      this.state.isEditor && <div onClick={this.closeSideMenu1} >
                          <div className="border1">
                              <span className="background">
                      <i className="fa fa-long-arrow-right fa-lg fa-border"   style={{color:'#0BB7A7'}}></i>
                      </span>
                     </div>
                      </div>
                  } 
              
               
                  
                  {
                      this.state.isEditor1 &&  <div onClick={this.openSideMenu} className="border1" >
                          <span className="background">
                      <i className="fa fa-long-arrow-right fa-lg fa-border" style={{color:'#0BB7A7'}}></i>
                      </span>
    
                      </div>
                  }
                
                 
                  <div className="border3">

                  </div>
                  
                 

              </div>
             
           
                   {
                       this.state.isRight && <div className="div12">
                       {
                        
                               <div className="inside2">
                                   <FroalaEditorComponent config={config} model={this.state.body} onModelChange={this.handleChange}
                                   />
                                   </div>
                           
                       }
       
                   </div>
                   }
                   

           
            
            {
                this.state.isEditor  &&  <div className="div2">
                 
                 
                

                
                  <div className="inside">
                      <div  className="div5">
                       
                      <button className="button" onClick={this.handleRefresh}><i className="fa fa-refresh">- Refresh </i></button>
                      </div>
                      <div className="space">

</div>
                           <FroalaEditorComponent  config={config1} model={this.state.body}
       onModelChange={this.onModelChange}
       
     /> 
            
      
          
          </div>
          </div> 
    }
          
          {
              this.state.isEditor1 && (
                <div className="div11">
                 
                 
                

                 
                   
                <div  className="div5">
                 
                <button className="button" onClick={this.handleRefresh}><i className="fa fa-refresh">- Refresh </i></button>
                </div>
                <div className="space">

</div>
<div className="inside1">
                     <FroalaEditorComponent  config={config1} model={this.state.body}
 onModelChange={this.onModelChange}
 
/> 
      

    
    </div>
    
    </div>

              )
          }
         
            
           
            
            </section>
          
            </div>
           
          
            {/* // </section> */}
            
            </div>
            {
                this.state.isRight &&   <div className="container15">
                <div className="border">
        
                </div>
                {
                              this.state.isRight && <div onClick={this.openSideMenu1} className="border1">
                                  <span className="background">
                              <i className="fa fa-long-arrow-left fa-lg fa-border" style={{color:'#0BB7A7'}}></i>
                              </span>
            
                              </div>
                          }
                           <div className="border3">
        
        </div>
        
            </div>
            }
            </section>
          
            </div>
        )
    }
}
export default Editor2