/***************************************
* Add yada_wiki TOC Button
***************************************/
(function($) {  
    tinymce.create('tinymce.plugins.yada_wiki_toc', {  
        init : function(editor, url) {  
            editor.addButton('yada_wiki_toc', {  
                title : 'Add Wiki TOC',  
                image : url+'/img/wiki-toc.png',  
                onclick : function() {  
	            	$('#popup_yw_toc_dialog').dialog("open");
                    //$("#popup_yw_category").focus();
                }  
            });  
        }    
    });  
    tinymce.PluginManager.add('yada_wiki_toc', tinymce.plugins.yada_wiki_toc);  
})(jQuery);
