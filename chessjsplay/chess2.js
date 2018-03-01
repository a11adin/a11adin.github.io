for (var i=0;i<8;++i) {
 document.write("<img src=\"l.png\">");
 for (var j=0;j<8;++j) document.write("<span onclick=\"hu("+j+","+i+")\" id=\""+j+i+"\"><img></span>");
 document.write("<img src=\"r.png\"><br>");
}



