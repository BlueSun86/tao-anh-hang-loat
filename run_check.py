import subprocess

html_content = open("index.html").read()
# Add global error catcher right after <head>
modified_html = html_content.replace("<head>", """<head>
<script>
window.onerror = function(msg, url, line, col, err) {
  var b = document.createElement("div");
  b.id = "fatal_error_banner";
  b.style = "position:fixed;top:0;left:0;width:100%;background:red;color:white;font-size:18px;font-weight:bold;padding:20px;z-index:999999;";
  b.innerText = "LỖI JAVASCRIPT: " + msg + " (Dòng " + line + ":" + col + ")";
  document.body.prepend(b);
};
</script>""")

open("index_debug.html", "w").write(modified_html)
