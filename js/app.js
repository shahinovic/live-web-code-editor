// Set the initial code in the editor fields
document.getElementById("htmlCode").value = "<div>\n\n</div>";
document.getElementById("cssCode").value = "<style>\n\n</style>";
document.getElementById("jsCode").value = "<script>\n\n</script>";

// Function to save the code to localStorage
function saveCodeToLocalStorage() {
  const htmlCode = document.getElementById("htmlCode").value;
  const cssCode = document.getElementById("cssCode").value;
  const jsCode = document.getElementById("jsCode").value;
  localStorage.setItem("htmlCode", htmlCode);
  localStorage.setItem("cssCode", cssCode);
  localStorage.setItem("jsCode", jsCode);
}

// Function to load the code from localStorage
function loadCodeFromLocalStorage() {
  const savedHtmlCode = localStorage.getItem("htmlCode");
  const savedCssCode = localStorage.getItem("cssCode");
  const savedJsCode = localStorage.getItem("jsCode");
  if (savedHtmlCode !== null) {
    document.getElementById("htmlCode").value = savedHtmlCode;
  }
  if (savedCssCode !== null) {
    document.getElementById("cssCode").value = savedCssCode;
  }
  if (savedJsCode !== null) {
    document.getElementById("jsCode").value = savedJsCode;
  }
}

// Show the preview of the code
function showPreview() {
  var htmlCode = document.getElementById("htmlCode").value;
  var cssCode = "" + document.getElementById("cssCode").value + "";
  var jsCode = "" + document.getElementById("jsCode").value + "";
  var frame = document.getElementById("preview-window").contentWindow.document;
  frame.open();
  frame.write(htmlCode + cssCode + jsCode);
  frame.close();
}

// Show the editor field corresponding to the clicked tab
function show(x) {
  document.getElementById("html").style.display = "none";
  document.getElementById("css").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById(x).style.display = "block";
}

// Show all editor fields when the screen is wider than 992px
// Hide CSS, JS and preview if the HTML editor is open when the screen is less than 992px
function show_all() {
  if (window.innerWidth >= 992) {
    document.getElementById("html").style.display = "block";
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = "block";
    document.getElementById("result").style.display = "block";
  }
  if (
    window.innerWidth < 992 &&
    document.getElementById("html").style.display == "block"
  ) {
    document.getElementById("css").style.display = "none";
    document.getElementById("js").style.display = "none";
    document.getElementById("result").style.display = "none";
  }
}

// Add event listeners to the editor fields to save the code to localStorage on input
const htmlEditor = document.getElementById("htmlCode");
htmlEditor.addEventListener("input", saveCodeToLocalStorage);

const cssEditor = document.getElementById("cssCode");
cssEditor.addEventListener("input", saveCodeToLocalStorage);

const jsEditor = document.getElementById("jsCode");
jsEditor.addEventListener("input", saveCodeToLocalStorage);

// Call the loadCodeFromLocalStorage function when the page loads
window.addEventListener("load", function () {
  loadCodeFromLocalStorage();
  showPreview();
});
