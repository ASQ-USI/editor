(function(){dust.register("modal",body_0);function body_0(chk,ctx){return chk.write("<div class=\"modal-overlay\"></div><div id=\"myModal\" class=\"modal-window\" style=\"width:").reference(ctx.get("width"),ctx,"h").write("px; height:").reference(ctx.get("height"),ctx,"h").write("px; margin-top:").reference(ctx.get("marginTop"),ctx,"h").write("px; margin-left:").reference(ctx.get("marginLeft"),ctx,"h").write("px; background: #fff;\"><div class=\"theme\">Themes <span class=\"text\">(Background)</span> <hr><span><img data-color=\"black\" src=\"http://placehold.it/150x170/595A59\"><img data-color=\"blue\" src=\"http://placehold.it/150x170/D9EFF8\"><img data-color=\"silver\" src=\"http://placehold.it/150x170/EFF2D9\"><img data-color=\"white\" src=\"http://placehold.it/150x170/FAFAFA\"><img data-color=\"yellow\" src=\"http://placehold.it/150x170/F9EFA9\"></span></div><div class=\"theme\">Layouts <span class=\"text\">(Select Slides)</span><hr><span><img id=\"theme-row\" src=\"img/row.png\"><img id=\"theme-column\" src=\"img/column.png\"><img id=\"theme-grid\" src=\"img/grid.png\"><img id=\"theme-circle\" src=\"img/circleLayout.png\"></span></div><a class=\"close-window\"></a></div>");}return body_0;})();