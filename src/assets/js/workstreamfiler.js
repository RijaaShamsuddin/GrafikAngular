$(document).ready(function() {
    $('#inputworkstream').filer({
        limit: 4,
        maxSize: 20,
        fileMaxSize : 20,
        extensions: ['avi', 'css','docx', 'gif', 'html', 'jpg', 'jpeg', 'mid', 'midi', 'mp3', 'mpg', 'mpeg', 'mov', 'qt', 'pdf', 'png', 'ram', 'rar', 'tiff', 'txt' , 'wav','zip', 'xml', 'json'],
        changeInput: '<div class="jFiler-input-dragDrop"><div class="jFiler-input-inner"><div class="jFiler-input-text"><p>Drag & Drop files here</p> <span style="display:inline-block; margin: 15px 17px;">or</span></div><a class="btn btn--primary btn--sm jFiler-input-choose-btn" href="#"><span class="btn__text">Browser Files</span></a></div></div>',
        showThumbs: true,
        appendTo: null,
        theme: "dragdropbox",
        templates: {
            box: '<ul class="jFiler-item-list"></ul>',
            item: '<li class="jFiler-item">\
                            <div class="jFiler-item-container zero-bott-margg">\
                                <div class="jFiler-item-inner">\
                                    <div class="jFiler-item-thumb">\
                                        <div class="jFiler-item-status"></div>\
                                        <div class="jFiler-item-info">\
                                            <span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name | limitTo: 25}}</b></span>\
                                        </div>\
                                        {{fi-image}}\
                                    </div>\
                                    <div class="jFiler-item-assets jFiler-row">\
                                        <ul class="list-inline pull-left">\
                                            <li>{{fi-progressBar}}</li>\
                                        </ul>\
                                        <ul class="list-inline pull-right">\
                                            <li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li>\
                                        </ul>\
                                    </div>\
                                </div>\
                            </div>\
                        </li>',
            itemAppend: '<li class="jFiler-item">\
                            <div class="jFiler-item-container zero-bott-margg">\
                                <div class="jFiler-item-inner">\
                                    <div class="jFiler-item-thumb">\
                                        <div class="jFiler-item-status"></div>\
                                        <div class="jFiler-item-info">\
                                            <span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name | limitTo: 25}}</b></span>\
                                        </div>\
                                        {{fi-image}}\
                                    </div>\
                                    <div class="jFiler-item-assets jFiler-row">\
                                        <ul class="list-inline pull-left">\
                                            <span class="jFiler-item-others">{{fi-icon}} {{fi-size2}}</span>\
                                        </ul>\
                                        <ul class="list-inline pull-right">\
                                            <li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li>\
                                        </ul>\
                                    </div>\
                                    <div class="jFiler-item-assets jFiler-row">\
                                        <button type="button" class="btn btn--xs make-cover-default" style="padding: 0px 14px;">Make Cover</button>\
                                    </div>\
                                </div>\
                            </div>\
                        </li>',
            progressBar: '<div class="bar"></div>',
            itemAppendToEnd: false,
            removeConfirmation: false,
            _selectors: {
                list: '.jFiler-item-list',
                item: '.jFiler-item',
                progressBar: '.bar',
                remove: '.jFiler-item-trash-action',
            }
        },
        uploadFile: {
            url: "upload.php",
            data: {},
            type: 'POST',
            enctype: 'multipart/form-data',
            beforeSend: function(){},
            success: function(data, el){
                var parent = el.find(".jFiler-jProgressBar").parent();
                el.find(".jFiler-jProgressBar").fadeOut("slow", function(){
                    $("<div class=\"jFiler-item-others text-success\"><i class=\"icon-jfi-check-circle\"></i> Success</div>").hide().appendTo(parent).fadeIn("slow");
                });
            },
            error: function(el){
                var parent = el.find(".jFiler-jProgressBar").parent();
                el.find(".jFiler-jProgressBar").fadeOut("slow", function(){
                    $("<div class=\"jFiler-item-others text-error\"><i class=\"icon-jfi-minus-circle\"></i> Error</div>").hide().appendTo(parent).fadeIn("slow");
                });
            },
            statusCode: {},
            onProgress: function(){},
        },
        dragDrop: {
            dragEnter: function(){},
            dragLeave: function(){},
            drop: function(){},
        },
        addMore: true,
        clipBoardPaste: true,
        excludeName: null,
        beforeShow: function(){return true},
        onSelect: function(){},
        afterShow: function(){},
        onRemove: function(){},
        onEmpty: function(){},
        captions: {
            button: "Choose Files",
            feedback: "Choose files To Upload",
            feedback2: "files were chosen",
            drop: "Drop file here to Upload",
            removeConfirmation: "Are you sure you want to remove this file?",
            errors: {
                filesLimit: "Only {{fi-limit}} files are allowed to be uploaded.",
                filesType: "Only Images are allowed to be uploaded.",
                filesSize: "{{fi-name}} is too large! Please upload file up to {{fi-maxSize}} MB.",
                filesSizeAll: "Files you've choosed are too large! Please upload files up to {{fi-maxSize}} MB."
            }
        }
    });
});