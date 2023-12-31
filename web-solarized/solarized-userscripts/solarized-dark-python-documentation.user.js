// ==UserScript==
// @name          Solarized Dark: Python documentation
// @namespace     http://userstyles.org
// @description	  This style restyles Python's documentation with the dark Solarized color palette.
// @author        Rastus Vernon
// @homepage      https://userstyles.org/styles/91707
// @include       http://docs.python.org/*
// @include       https://docs.python.org/*
// @include       http://*.docs.python.org/*
// @include       https://*.docs.python.org/*
// @run-at        document-start
// @version       0.20140503232020
// ==/UserScript==
(function() {var css = [
	"@namespace url(http://www.w3.org/1999/xhtml);",
	"body {",
	"		background-color: #002b36 !important;",
	"		color: #839496 !important",
	"	}",
	"	div.note, div.seealso {",
	"	    background-color: #073642;",
	"	    border-style: none !important;",
	"	}",
	"	tt, div.sphinxsidebar, div.sphinxsidebarwrapper, span.pre, div.related, div.related a, div.document, div.documentwrapper, div.bodywrapper, div.body, div.highlight, pre, h1,h2,h3,h4,h5,h6 {",
	"		background: transparent !important;",
	"		color: inherit !important",
	"	}",
	"	",
	"	#sidebarbutton {",
	"		background: #073642 !important",
	"	}",
	"	",
	"	table, td, tr, th, tbody {",
	"		background: transparent !important;",
	"		color: inherit !important;",
	"		border-color: #073642 !important",
	"	}",
	"	",
	"	div.related {",
	"		border-bottom: none !important",
	"	}",
	"	table.docutils td, table.docutils th {",
	"		border-style: none !important",
	"	}",
	"	div.highlight, pre {",
	"		border: none !important",
	"	}",
	"	",
	"	a {",
	"		color: #268bd2 !important",
	"	}",
	"	",
	"	a.headerlink:hover {",
	"		background-color: transparent !important",
	"	}",
	"	",
	"	div.sphinxsidebar p {",
	"		color: inherit !important;",
	"	}",
	"	",
	"	/* Highlighting */",
	"	",
	"	.highlight .hll { background-color: #073642 !important } /* base02 */",
	"	.highlight  { background: #002b36; } /* base03 */",
	"	.highlight .c { color: #586e75 !important; font-style: italic } /* Comment */",
	"	.highlight .err { border: 1px solid #dc322f } /* Error */",
	"	.highlight .k { color: #859900 !important; font-weight: bold } /* Keyword */",
	"	.highlight .o { color: #2aa198 !important } /* Operator */",
	"	.highlight .cm { color: #586e75 !important; font-style: italic } /* Comment.Multiline */",
	"	.highlight .cp { color: #586e75 !important } /* Comment.Preproc */",
	"	.highlight .c1 { color: #586e75 !important; font-style: italic } /* Comment.Single */",
	"	.highlight .cs { color: #586e75 !important; background-color: #fff0f0 !important } /* Comment.Special */",
	"	.highlight .gd { color: #dc322f !important } /* Generic.Deleted */",
	"	.highlight .ge { font-style: italic } /* Generic.Emph */",
	"	.highlight .gr { color: #dc322f !important } /* Generic.Error */",
	"	.highlight .gh { color: #268bd2 !important; font-weight: bold } /* Generic.Heading */",
	"	.highlight .gi { color: #859900 !important } /* Generic.Inserted */",
	"	.highlight .go { color: #839496 !important } /* Generic.Output */",
	"	.highlight .gp { color: #cb4b16 !important; font-weight: bold } /* Generic.Prompt */",
	"	.highlight .gs { font-weight: bold } /* Generic.Strong */",
	"	.highlight .gu { color: #6c71c4 !important; font-weight: bold } /* Generic.Subheading */",
	"	.highlight .gt { color: #6c71c4 !important } /* Generic.Traceback */",
	"	.highlight .kc { color: #859900 !important; font-weight: bold } /* Keyword.Constant */",
	"	.highlight .kd { color: #859900 !important; font-weight: bold } /* Keyword.Declaration */",
	"	.highlight .kn { color: #859900 !important; font-weight: bold } /* Keyword.Namespace */",
	"	.highlight .kp { color: #859900 !important } /* Keyword.Pseudo */",
	"	.highlight .kr { color: #859900 !important; font-weight: bold } /* Keyword.Reserved */",
	"	.highlight .kt { color: #dc322f !important } /* Keyword.Type */",
	"	.highlight .m { color: #859900 !important } /* Literal.Number */",
	"	.highlight .s { color: #93a1a1 !important } /* Literal.String */",
	"	.highlight .na { color: #93a1a1 !important } /* Name.Attribute */",
	"	.highlight .nb { color: #859900 !important } /* Name.Builtin */",
	"	.highlight .nc { color: #268bd2 !important; font-weight: bold } /* Name.Class */",
	"	.highlight .no { color: #268bd2 !important } /* Name.Constant */",
	"	.highlight .nd { color: #859900 !important; font-weight: bold } /* Name.Decorator */",
	"	.highlight .ni { color: #dc322f !important; font-weight: bold } /* Name.Entity */",
	"	.highlight .ne { color: #859900 !important } /* Name.Exception */",
	"	.highlight .nf { color: #268bd2 !important } /* Name.Function */",
	"	.highlight .nl { color: #268bd2 !important; font-weight: bold } /* Name.Label */",
	"	.highlight .nn { color: #268bd2 !important; font-weight: bold } /* Name.Namespace */",
	"	.highlight .nt { color: #268bd2 !important; font-weight: bold } /* Name.Tag */",
	"	.highlight .nv { color: #839496 !important } /* Name.Variable */",
	"	.highlight .ow { color: #859900 !important; font-weight: bold } /* Operator.Word */",
	"	.highlight .w { color: #839496 !important } /* Text.Whitespace */",
	"	.highlight .mf { color: #6c71c4 !important } /* Literal.Number.Float */",
	"	.highlight .mh { color: #6c71c4 !important } /* Literal.Number.Hex */",
	"	.highlight .mi { color: #6c71c4 !important } /* Literal.Number.Integer */",
	"	.highlight .mo { color: #6c71c4 !important } /* Literal.Number.Oct */",
	"	.highlight .sb { color: #268bd2 !important } /* Literal.String.Backtick */",
	"	.highlight .sc { color: #268bd2 !important } /* Literal.String.Char */",
	"	.highlight .sd { color: #268bd2 !important; font-style: italic } /* Literal.String.Doc */",
	"	.highlight .s2 { color: #268bd2 !important } /* Literal.String.Double */",
	"	.highlight .se { color: #268bd2 !important; font-weight: bold } /* Literal.String.Escape */",
	"	.highlight .sh { color: #268bd2 !important } /* Literal.String.Heredoc */",
	"	.highlight .si { color: #268bd2 !important; font-style: italic } /* Literal.String.Interpol */",
	"	.highlight .sx { color: #268bd2 !important } /* Literal.String.Other */",
	"	.highlight .sr { color: #268bd2 !important } /* Literal.String.Regex */",
	"	.highlight .s1 { color: #268bd2 !important } /* Literal.String.Single */",
	"	.highlight .ss { color: #268bd2 !important } /* Literal.String.Symbol */",
	"	.highlight .bp { color: #268bd2 !important } /* Name.Builtin.Pseudo */",
	"	.highlight .vc { color: #839496 !important } /* Name.Variable.Class */",
	"	.highlight .vg { color: #839496 !important } /* Name.Variable.Global */",
	"	.highlight .vi { color: #839496 !important } /* Name.Variable.Instance */",
	"	.highlight .il { color: #6c71c4 !important } /* Literal.Number.Integer.Long */"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
